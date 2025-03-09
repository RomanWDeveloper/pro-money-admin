import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { errorNormalize } from "@/utils/error";

const onError = (error: unknown) => {
  const err = errorNormalize(error);

  message.open({
    type: "error",
    content: err.message,
  });
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError,
  }),

  mutationCache: new MutationCache({
    onError,
  }),
});
