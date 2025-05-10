import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

/**
 * APIClient class for making HTTP requests using Axios.
 * 
 * This class provides a consistent and reusable way to interact with APIs, including built-in error handling.
 * 
 * @class APIClient
 * @example
 * ```tsx
 * const apiClient = new APIClient('https://api.example.com');
 * apiClient.get('/users'); // Example of GET request
 * ```
 */
class APIClient {
    private axiosInstance: AxiosInstance;

    /**
     * Initializes a new instance of the APIClient.
     * @param baseURL - The base URL for the API requests.
     */
    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            withCredentials: false,
            timeout: 10000,
        });
        this.setupInterceptors();
    }
    
    private setupInterceptors() {
        this.axiosInstance.interceptors.request.use(
            (config) => config,
            (error) => Promise.reject(error)
        );

        this.axiosInstance.interceptors.response.use(
            (response) => response,
            (error) => this.handleError(error)
        );
    }

    /**
     * Handles API errors and logs them appropriately.
     * @param error - The error object from the Axios request.
     * @returns A rejected promise with the error.
     */
    private handleError(error: AxiosError): Promise<never> {
        if (error.response) {
            console.error('API Error:', error.response.status, error.response.data);
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Request error:', error.message);
        }
        return Promise.reject(error);
    }

    /**
     * Makes a generic HTTP request.
     * @param config - The Axios request configuration.
     * @returns The response data of the specified type.
     */
    public async request<T>(config: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.axiosInstance.request<T>(config);
        return response.data;
    }

    /**
     * Performs a GET request.
     * @param url - The URL of the API endpoint.
     * @param params - Optional query parameters.
     * @returns The response data of the specified type.
     */
    public async get<T>(url: string, params?: any): Promise<T> {
        return this.request<T>({ method: 'GET', url, params });
    }

    /**
     * Performs a POST request.
     * @param url - The URL of the API endpoint.
     * @param data - The request payload.
     * @returns The response data of the specified type.
     */
    public async post<T, U = any>(url: string, data?: U): Promise<T> {
        return this.request<T>({ method: 'POST', url, data });
    }

    /**
     * Performs a PUT request.
     * @param url - The URL of the API endpoint.
     * @param data - The request payload.
     * @returns The response data of the specified type.
     */
    public async put<T, U = any>(url: string, data?: U): Promise<T> {
        return this.request<T>({ method: 'PUT', url, data });
    }

    /**
     * Performs a DELETE request.
     * @param url - The URL of the API endpoint.
     * @returns The response data of the specified type.
     */
    public async delete<T>(url: string): Promise<T> {
        return this.request<T>({ method: 'DELETE', url });
    }
}

export default APIClient;
