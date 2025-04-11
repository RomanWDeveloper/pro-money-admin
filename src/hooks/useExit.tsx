import { LINKS } from "@/constants/links";
import { useSignOut } from "@/hooks/api/auth";

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
