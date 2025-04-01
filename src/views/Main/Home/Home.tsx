import { useGetMe } from "@/utils/apiMethods";

export const Home = () => {
  const { data } = useGetMe();
  return (
    <div>
      <div>{data?.email}</div>
    </div>
  );
};
