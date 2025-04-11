import { useGetMe } from "@/hooks/api/users";

export const Home = () => {
  const { data } = useGetMe();
  return (
    <div>
      <div>{data?.email}</div>
    </div>
  );
};
