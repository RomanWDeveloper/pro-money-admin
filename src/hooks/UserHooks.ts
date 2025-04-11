import { useDeleteUser, useBanUser } from "@/hooks/api/users";
import { App as AntApp } from "antd";

export const useUserDelete = () => {
  const {mutate: deleteUser} = useDeleteUser();
  const { notification } = AntApp.useApp();

  const handleDeleteUser = (id: string, isDeleted: boolean, onSuccess?: () => void) => {
    deleteUser({id, requestBody: {isActive: !!isDeleted}}, {
      onSuccess: () => {
        notification.success({
          message: isDeleted ? 'Пользователь восстановлен' : 'Пользователь удален',
        });
        
        if (onSuccess) {
          onSuccess();
        }
      }
    });
  };
  return handleDeleteUser;
};

export const useUserBan = () => {
  const {mutate: banUser} = useBanUser();
  const { notification } = AntApp.useApp();

  const handleBanUser = (id: string, isActive: boolean, onSuccess?: () => void) => {
    banUser({id, requestBody: {isActive: !isActive}}, {
      onSuccess: () => {
        notification.success({
          message: 'Пользователь заблокирован',
        });

        if (onSuccess) {
          onSuccess();
        }
      }
    });
  };
  return  handleBanUser;
};