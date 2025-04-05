import { Auth } from "@/layouts/Auth";
import { Login } from "@/views/Auth/Login";
import { NotAllowed } from "@/views/Auth/NotAllowed";

export const auth = {
    path: "/auth/",
    element: <Auth/>,

    children: [
      {
        index: true,
        path: "/auth/",
        element: <Login/>,
      },
      {
        path: "/auth/not-allowed/",
        element: <NotAllowed/>,
      },
    ],
  }