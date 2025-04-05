// Auth
import { useAuthenticationServicePostV1AuthSignInEmail as useSignInEmail } from "@/generated-api/queries";
import { useAuthenticationServicePostV1AuthSignInEmailVerify as useVerifySignInEmail } from "@/generated-api/queries";
import { useAuthenticationServicePostV1AuthRefresh as useRefreshToken } from "@/generated-api/queries";
import { useAuthenticationServicePostV1AuthSignOut as useSignOut } from "@/generated-api/queries";

// Users
import { useUsersServiceGetV1AdminUsersMe as useGetMe } from "@/generated-api/queries";
import { useUsersServiceGetV1AdminUsers as useUsersList } from "@/generated-api/queries";
import { useUsersServicePostV1AdminUsers as useCreateUser } from "@/generated-api/queries";
import { useUsersServicePatchV1AdminUsersById as useUpdateUser } from "@/generated-api/queries";
import { useUsersServiceGetV1AdminUsersById as useGetUser } from "@/generated-api/queries";
export { 
  useSignInEmail, 
  useVerifySignInEmail, 
  useGetMe, 
  useRefreshToken, 
  useSignOut,
  useUsersList,
  useCreateUser,
  useGetUser,
  useUpdateUser
 };