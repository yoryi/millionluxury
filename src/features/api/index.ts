/**
 * Configures and initializes the API service with the base URL provided by `ApiConfig`.
 *
 * This module creates an instance of `APIClient` using the configured base URL and exports it for use throughout the application.
 *
 * @module
 * @example
 * ```tsx
 * import apiClient from './services/apiService';
 * apiClient.getData(); // Example of how to use the API service
 * ```
 */

import { ApiConfig } from '../../config';
import APIClient from './services/ApiService';

const baseURL = ApiConfig.prod;
const apiClient = new APIClient(baseURL);
export default apiClient;
