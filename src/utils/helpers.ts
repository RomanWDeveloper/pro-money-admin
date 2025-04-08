// Проверяет наличие токена в localStorage
export const checkAuthToken = () => {
  const token = localStorage.getItem("auth-token");

  return !!token;
};

// генерация токена по email
export const generateToken = (email: string): number => {
  let hash = 8;
  for (let i = 0; i < email.length; i++) {
    hash = (hash * 33) ^ email.charCodeAt(i);
  }
  return hash;
}