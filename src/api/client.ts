import axios from 'axios';
import { API_BASE_URL, API_TOKEN } from '@env';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    token: API_TOKEN,
  },
});

apiClient.interceptors.request.use(
  config => {
    console.log('✈ Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  error => {
    console.error('✘ Request Error:', error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  response => {
    console.log('✔ Response:', response.config.url, response.status);
    return response;
  },
  error => {
    console.error('✘ Response Error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
