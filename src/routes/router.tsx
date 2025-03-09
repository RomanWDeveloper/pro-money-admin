import { createBrowserRouter } from "react-router-dom";
import { App } from "@/layouts/App";
import { main } from "./main";
import { NotFound } from "@/views/NotFound";
import { auth } from "./auth";

const children = [main, auth];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,

    children,
  }
]);

export default router;
