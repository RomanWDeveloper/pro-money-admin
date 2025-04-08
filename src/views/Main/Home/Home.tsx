import { useGetMe } from "@/utils/api/users";

export const Home = () => {
  const { data } = useGetMe();
  return (
    <div>
      <div>{data?.email}</div>
    </div>
  );
};
