import { USERS } from "@/configs/links/users";
import { Users } from "@/views/Main/Users";
import { User } from "@/views/Main/Users/User";

export const users = [
  {
    path: USERS.path,
    element: <Users />,
  },
  {
    path: USERS.path + '/:id',
    element: <User />,
  },
];
