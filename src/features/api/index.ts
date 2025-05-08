import { ApiConfig } from '../../config';
import ApiService from './services/ApiService';

const apiUrl = ApiConfig.getBaseURL();
export const apiService = new ApiService(apiUrl);
export { ApiService };
