# API Service Module

Módulo `ApiService` para manejar solicitudes HTTP (`GET` y `POST`) usando Axios.

## Configuración

```javascript
import { ApiConfig } from '../../config';
import ApiService from './services/ApiService';

const apiUrl = ApiConfig.getBaseURL();
export const apiService = new ApiService(apiUrl);
```

## Métodos

* **GET**: `apiService.get<T>(url: string): Promise<T>`
* **POST**: `apiService.post<T, U = T>(url: string, data: U): Promise<T>`

## Ejemplo de Uso

```javascript
// Solicitud GET
const fetchData = async () => {
  const data = await apiService.get('/ruta/endpoint');
  console.log(data);
};

// Solicitud POST
const postData = async () => {
  const response = await apiService.post('/ruta/endpoint', { key: 'value' });
  console.log(response);
};
```