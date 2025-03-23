import axios, { AxiosError } from "axios";
import { BASE_URL } from './api';
import { LINKS } from "./links";
import { isDevMode } from "./mode";
import { useRefreshToken } from "@/utils/apiMethods";

export const setupAxiosParams = () => {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.withCredentials = true;
  
  // Флаг для отслеживания процесса обновления токена
  let isRefreshing = false;
  // Массив запросов, ожидающих обновления токена
  let failedQueue: Array<{
    resolve: (value?: unknown) => void;
    reject: (reason?: any) => void;
    config: any;
  }> = [];

  // Функция для обработки очереди запросов
  const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach(promise => {
      if (error) {
        promise.reject(error);
      } else {
        promise.config.headers["Authorization"] = `Bearer ${token}`;
        promise.resolve(axios(promise.config));
      }
    });
    failedQueue = [];
  };

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
    async (error: AxiosError) => {
      if (isDevMode) {
        console.log("axios error: ");
        console.error(error);
      }

      const originalRequest = error.config;
      
      // пользователь не авторизован
      if (error.response && error.response.status === 401 && originalRequest) {
        // Проверяем, не пытаемся ли мы уже обновить токен
        if (isRefreshing) {
          // Если уже идет обновление, добавляем запрос в очередь
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject, config: originalRequest });
          });
        }

        isRefreshing = true;

        try {
          // Запрос на обновление токена с использованием tanstack/react-query
          const { data: response } = await useRefreshToken();

          // Если успешно получили новый токен
          if (response) {
            const newToken = response;
            localStorage.setItem("auth-token", newToken.toString());
            
            // Обновляем заголовок в оригинальном запросе
            originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
            
            // Обрабатываем очередь запросов
            processQueue(null, newToken);
            
            // Повторяем оригинальный запрос с новым токеном
            return axios(originalRequest);
          }
        } catch (refreshError) {
          // Если не удалось обновить токен
          processQueue(refreshError, null);
          
          // Очищаем токен и перенаправляем на страницу авторизации
          localStorage.removeItem("auth-token");
          window.location.href = LINKS.AUTH.fullPath;
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  );
};
