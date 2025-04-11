import { useUsersServiceGetV1AdminUsersMe as useGetMe } from "@/generated-api/queries";
import { useUsersServiceGetV1AdminUsers as useUsersList } from "@/generated-api/queries";
import { useUsersServicePostV1AdminUsers as useCreateUser } from "@/generated-api/queries";
import { useUsersServicePatchV1AdminUsersById as useUpdateUser } from "@/generated-api/queries";
import { useUsersServiceGetV1AdminUsersById as useGetUser } from "@/generated-api/queries";
import { useUsersServicePatchV1AdminUsersByIdDelete as useDeleteUser } from "@/generated-api/queries";
import { useUsersServicePatchV1AdminUsersByIdBan as useBanUser } from "@/generated-api/queries";

export {
  useGetMe,
  useUsersList,
  useCreateUser,
  useUpdateUser,
  useGetUser,
  useDeleteUser,
  useBanUser
}