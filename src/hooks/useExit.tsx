import { LINKS } from "@/constants/links";
import { useSignOut } from "@/utils/apiMethods";

export const useExit = () => {
  const { mutate: signOut } = useSignOut();

  const exit = () => {
    signOut();
    localStorage.removeItem("auth-token");
    window.location.href = LINKS.AUTH.fullPath;
  };

  return exit;
};
