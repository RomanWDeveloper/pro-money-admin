import { Navigate } from 'react-router-dom';
import { LINKS } from '@/constants/links';
import { checkAuthToken } from '@/utils/helpers';

export const useRequireAuth = () => {
  if (!checkAuthToken()) {
    return <Navigate to={LINKS.AUTH.fullPath} replace />;
  }
  
  return null;
};