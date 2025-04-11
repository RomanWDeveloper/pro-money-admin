import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { useEffect } from 'react';
import { fetchUserData, updateUserData, clearUser } from '@/store/meSlise';
import { UserResponseDto } from '@/generated-api/requests';

/**
 * Хук для работы с данными текущего пользователя
 */
export const useMe = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, status, error } = useSelector((state: RootState) => state.me);

  // Загрузка данных пользователя при первом рендере
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserData());
    }
  }, [dispatch, status]);

  // Обновление данных пользователя
  const updateUser = (userData: Partial<UserResponseDto>) => {
    dispatch(updateUserData(userData));
  };

  // Очистка данных пользователя (например, при выходе)
  const logoutUser = () => {
    dispatch(clearUser());
  };

  // Перезагрузка данных пользователя
  const refreshUser = () => {
    dispatch(fetchUserData());
  };

  return {
    user,
    isLoading: status === 'loading',
    error,
    updateUser,
    logoutUser,
    refreshUser
  };
}; 