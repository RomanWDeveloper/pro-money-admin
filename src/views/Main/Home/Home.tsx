import { useUsersAdminServiceGetV1AdminUsersMe } from "@/generated-api/queries";

export const Home = () => {
  const { data } = useUsersAdminServiceGetV1AdminUsersMe();
  return (
    <div>
      <div>{data?.email}</div>
    </div>
  );
};
