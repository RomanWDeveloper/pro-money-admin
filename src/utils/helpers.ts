// Проверяет наличие токена в localStorage
export const checkAuthToken = () => {
  const token = localStorage.getItem("auth-token");

  return !!token;
};
