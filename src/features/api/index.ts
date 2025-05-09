import { ApiConfig } from '../../config';
import ApiService from './services/ApiService';

/**
 * Configures and initializes the API service with the base URL provided by `ApiConfig`.
 *
 * This module creates an instance of `ApiService` using the configured base URL and exports it for use throughout the application.
 *
 * @module
 * @example
 * ```tsx
 * import { apiService } from './services/apiService';
 * apiService.getData(); // Example of how to use the API service
 * ```
 */

const apiUrl = ApiConfig.getBaseURL()
export const apiService = new ApiService(apiUrl);
export { ApiService };
