import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { errorNormalize } from "@/utils/error";
import type { NotificationInstance } from 'antd/es/notification/interface';

export const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  mutationCache: new MutationCache(),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
    },
  },
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
