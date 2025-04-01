import { USERS } from "@/configs/links/users";
import { Users } from "@/views/Main/Users";
import { User } from "@/views/Main/Users/User";
import { Navigate } from "react-router-dom";

export const users = [
  {
    path: USERS.path,
    element: <Users />,
  },
  {
    path: USERS.path + '/:id',
    element: <User />,
  },
  {
    path: USERS.path + '/:id?',
    element: (
      <Navigate to={USERS.path + '/create'} replace />
    ),
  },
  {
    path: USERS.CREATE.fullPath,
    element: <User />,
  },
];
