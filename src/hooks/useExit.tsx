import { LINKS } from "@/constants/links";
import { useSignOut } from "@/utils/apiMethods";

export const useExit = (redirect: boolean = false) => {
  const { mutate: signOut } = useSignOut();

  const exit = () => {
    signOut();
    localStorage.removeItem("auth-token");
    
    if (redirect) {
      window.location.href = LINKS.AUTH.fullPath;
    }
  };

  return exit;
};
