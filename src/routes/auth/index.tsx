import { Auth } from "@/layouts/Auth";
import { Login } from "@/views/Auth/Login";

export const auth = {
    path: "/auth/",
    element: <Auth/>,

    children: [
      {
        index: true,
        path: "/auth/",
        element: <Login/>,
      },
    ],
  }