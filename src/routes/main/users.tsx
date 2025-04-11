import { USERS } from "@/constants/links/users";
import { Users } from "@/views/Main/Users";
import { User } from "@/views/Main/User";

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
    path: USERS.CREATE.fullPath,
    element: <User />,
  },
];
