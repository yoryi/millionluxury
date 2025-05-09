import { useState, useCallback, useRef } from 'react';
import apiClient from '../features/api';

interface UseAPIState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * @class APIClientService
 * @description Encapsulates the logic for making API requests and handling the loading, success, and error states.
 * @template T The type of the data expected in the API response.
 */
class APIClientService<T> {
  private state: UseAPIState<T>;

  constructor() {
    this.state = {
      data: null,
      loading: false,
      error: null,
    };
  }

  /**
   * Updates the internal state with the new partial state.
   * @param newState The new state to merge with the current state.
   */
  private setState(newState: Partial<UseAPIState<T>>) {
    this.state = { ...this.state, ...newState };
  }

  /**
   * Makes an API request based on the provided method and URL.
   * @param method The HTTP method to use ('GET', 'POST', 'PUT', 'DELETE').
   * @param url The URL to send the request to.
   * @param data The data to send in the body of the request (optional).
   */
  async fetch(method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, data?: any) {
    this.setState({ data: null, loading: true, error: null });

    try {
      let response: T;
      switch (method) {
        case 'GET':
          response = await apiClient.get<T>(url);
          break;
        case 'POST':
          response = await apiClient.post<T>(url, data);
          break;
        case 'PUT':
          response = await apiClient.put<T>(url, data);
          break;
        case 'DELETE':
          response = await apiClient.delete<T>(url);
          break;
        default:
          throw new Error('Unsupported method');
      }
      this.setState({ data: response, loading: false, error: null });
    } catch (error: any) {
      this.setState({
        data: null,
        loading: false,
        error: error.message || 'Unknown error',
      });
    }
  }

  /**
   * Gets the current state of the API client.
   * @returns The current state of the API client.
   */
  getState() {
    return this.state;
  }
}

/**
 * Custom hook to interact with the API client.
 * @template T The type of the data expected in the API response.
 * @returns The current state (data, loading, error) and a fetch function to make API requests.
 */
export const useAPIClient = <T = any>() => {
  const [state, setState] = useState<UseAPIState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const apiClientService = useRef(new APIClientService<T>()).current;

  const fetch = useCallback(
    async (method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, data?: any) => {
      setState((prevState) => ({ ...prevState, loading: true }));
      await apiClientService.fetch(method, url, data);
      setState(apiClientService.getState());
    },
    []
  );

  return { ...state, fetch };
};
