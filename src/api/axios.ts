import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.params = {
    ...config.params,
    api_key: process.env.REACT_APP_API_KEY,
    language: "pt",
  };

  return config;
});

export default axiosInstance;
