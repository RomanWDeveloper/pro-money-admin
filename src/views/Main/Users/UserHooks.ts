import { useDeleteUser, useBanUser } from "@/utils/api/users";
import { App as AntApp } from "antd";

export const useUserDelete = (id: string) => {
  const {mutate: deleteUser} = useDeleteUser();
  const { notification } = AntApp.useApp();

  const handleDeleteUser = () => {
    deleteUser({id}, {
      onSuccess: () => {
        notification.success({
          message: 'Пользователь удален',
        });
      }
    });
  };
  return { handleDeleteUser };
};

export const useUserBan = (id: string) => {
  const {mutate: banUser} = useBanUser();
  const { notification } = AntApp.useApp();

  const handleBanUser = () => {
    banUser({id}, {
      onSuccess: () => {
        notification.success({
          message: 'Пользователь заблокирован',
        });
      }
    });
  };
  return { handleBanUser };
};