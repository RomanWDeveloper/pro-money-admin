import { LINKS } from "@/constants/links";

// Перенаправляет на страницу авторизации, если токен отсутствует
export const redirectToLoginIfNoToken = () => {
  if (!checkAuthToken()) {
    window.location.href = LINKS.AUTH.fullPath;
  }
};

// Проверяет наличие токена в localStorage
export const checkAuthToken = () => {
  const token = localStorage.getItem("auth-token");

  return !!token;
};
