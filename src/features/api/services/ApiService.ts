import axios, { AxiosInstance, AxiosResponse } from 'axios';

class ApiService {
    private axiosInstance: AxiosInstance;
    /**
     * Creates an instance of ApiService with the provided base URL.
     * 
     * @param {string} baseURL - The base URL for API requests.
     */
    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: false,
        });

        this.axiosInstance.interceptors.request.use(
            (config) => {
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        this.axiosInstance.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    /**
     * Makes a GET request to the specified URL and returns the response data.
     * 
     * @param {string} url - The API endpoint to request.
     * @returns {Promise<T>} - The data returned from the GET request.
     * @throws Will throw an error if the request fails.
     */
    public async get<T>(url: string): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axiosInstance.get<T>(url);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Makes a POST request to the specified URL with the provided data and returns the response data.
     * 
     * @param {string} url - The API endpoint to request.
     * @param {U} data - The data to send in the POST request.
     * @returns {Promise<T>} - The data returned from the POST request.
     * @throws Will throw an error if the request fails.
     */
    public async post<T, U = T>(url: string, data: U): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axiosInstance.post<T>(url, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
export default ApiService;
