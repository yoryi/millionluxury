import axios, { AxiosInstance, AxiosResponse } from 'axios';
class ApiService {
    private axiosInstance: AxiosInstance;
    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    public async get<T>(url: string): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axiosInstance.get<T>(url);
            return response.data;
        } catch (error) {
            console.error('Error en GET:', error);
            throw error;
        }
    }
    public async post<T, U = T>(url: string, data: U): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axiosInstance.post<T>(url, data);
            return response.data;
        } catch (error) {
            console.error('Error en POST:', error);
            throw error;
        }
    }
}
export default ApiService;
