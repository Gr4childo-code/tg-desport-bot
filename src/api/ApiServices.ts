import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

type ApiServiceConfig = AxiosRequestConfig | undefined;

export function ApiServices({ ...axiosConfig }: ApiServiceConfig = {}): AxiosInstance {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const baseUrl = isDevelopment ? process.env.NEXT_CUSTOMER_DEVELOPMENT_URL : process.env.NEXT_CUSTOMER_URL;

  const config: AxiosRequestConfig = {
    baseURL: `${baseUrl}`,
    ...axiosConfig,
  };

  const axiosInstance = axios.create(config);

  return axiosInstance;
}
