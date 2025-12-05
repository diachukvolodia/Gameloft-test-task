import axios from 'axios';
import type { AxiosInstance } from 'axios';

export const axiosClient: AxiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
