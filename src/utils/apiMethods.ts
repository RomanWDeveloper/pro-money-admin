// Auth
import { useAuthenticationServicePostV1AuthSignInEmail as useSignInEmail } from "@/generated-api/queries";
import { useAuthenticationServicePostV1AuthSignInEmailVerify as useVerifySignInEmail } from "@/generated-api/queries";
import { useAuthenticationServicePostV1AuthRefresh as useRefreshToken } from "@/generated-api/queries";
import { useAuthenticationServicePostV1AuthSignOut as useSignOut } from "@/generated-api/queries";

// Users
import { useHelloServiceGetV1 as useHelloService } from "@/generated-api/queries";
import { useUsersAdminServiceGetV1AdminUsersMe as useGetMe } from "@/generated-api/queries";

export { 
  useSignInEmail, 
  useVerifySignInEmail, 
  useHelloService, 
  useGetMe, 
  useRefreshToken, 
  useSignOut
 };