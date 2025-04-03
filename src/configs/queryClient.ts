import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { errorNormalize } from "@/utils/error";
import type { NotificationInstance } from 'antd/es/notification/interface';

export const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  mutationCache: new MutationCache(),
});

export const setupErrorHandlers = (notification: NotificationInstance) => {
  const onError = (error: unknown) => {
    const err = errorNormalize(error);
    
    notification.error({
      message: "Ошибка",
      description: err.message,
      duration: 4,
    });
  };

  queryClient.getQueryCache().config.onError = onError;
  queryClient.getMutationCache().config.onError = onError;
};
