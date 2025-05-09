import { useState, useCallback } from 'react';
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

  /**
   * Creates a new instance of the API client service.
   * Initializes the state with default values.
   */
  constructor() {
    this.state = {
      data: null,
      loading: false,
      error: null,
    };
  }

  /**
   * Updates the API request state.
   * @param {Partial<UseAPIState<T>>} newState The new state to be updated.
   * @private
   */
  private setState(newState: Partial<UseAPIState<T>>) {
    this.state = { ...this.state, ...newState };
  }

  /**
   * Makes a request to the API using the specified HTTP method.
   * @param {'GET' | 'POST' | 'PUT' | 'DELETE'} method The HTTP method for the request.
   * @param {string} url The URL for the request.
   * @param {any} [data] The data to be sent in the body of the request (if applicable).
   * @returns {Promise<void>} A promise that resolves once the request is complete.
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
   * Gets the current state of the API request.
   * @returns {UseAPIState<T>} The current state, including data, loading state, and error.
   */
  getState() {
    return this.state;
  }
}

/**
 * Custom hook to interact with the API client service.
 * @template T The type of the data expected in the API response.
 * @returns {UseAPIState<T> & { fetch: (method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, data?: any) => Promise<void> }}
 * The state of the API request and the `fetch` function to make requests.
 */
export const useAPIClient = <T = any>() => {
  const [state, setState] = useState<UseAPIState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const apiClientService = new APIClientService<T>();

  const fetch = useCallback(
    async (method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, data?: any) => {
      await apiClientService.fetch(method, url, data);
      setState(apiClientService.getState());
    },
    []
  );

  return { ...state, fetch };
};
