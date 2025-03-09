import axios, { AxiosError } from "axios";
import { BASE_URL } from './api';
import { LINKS } from "./links";
import { isDevMode } from "./mode";

export const setupAxiosParams = () => {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.withCredentials = true;
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("auth-token");
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  });

  axios.interceptors.response.use(
    (response) => {
      // Здесь можно добавить логику, которая будет выполнена для всех успешных ответов
      return response;
    },
    (error: AxiosError) => {
      if (isDevMode) {
        console.log("axios error: ");
        console.error(error);
      }

      // пользователь не авторизован
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("auth-token");
        window.location.href = LINKS.AUTH.fullPath;
      }

      return Promise.reject(error);
    }
  );
};
