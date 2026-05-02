import axios from 'axios';
import { authStorage } from '../lib/auth';

const API_BASE_URL = 'https://ajnihastay.onrender.com'; // Placeholder, user mentioned Django backend

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth header
api.interceptors.request.use(
  (config) => {
    const token = authStorage.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = authStorage.getRefreshToken();

      if (refreshToken) {
        try {
          const response = await axios.post(`${API_BASE_URL}/api/accounts/token/refresh/`, {
            refresh: refreshToken,
          });
          const { access } = response.data;
          authStorage.setTokens(access, refreshToken);
          originalRequest.headers.Authorization = `Bearer ${access}`;
          return api(originalRequest);
        } catch (refreshError) {
          authStorage.clearTokens();
          window.location.href = '/login';
          return Promise.reject(refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
