import axios from 'axios';
import { getCookie } from './cookies';

export const http = axios.create({
    baseURL: 'http://localhost:8000'
});

http.interceptors.request.use((request) => {
    if (!process.browser) {
        return request;
    }

    const token = getCookie('token');

    if (token) {
        request.headers['Authorization'] = `Bearer ${token}`;
    }

    return request;
});
