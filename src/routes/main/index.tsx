import { Main } from "@/layouts/Main";
import { Home } from "@/views/Main/Home";
import { settings } from "./settings";
import { users } from "./users";
import { posts } from "./posts";
import { benefits } from "./benefits";
import { feedbacks } from "./feedbacks";
import { advertisers } from "./advertisers";
import { constructor } from "./constructor";

const routes = [
  settings, 
  ...users, 
  ...posts, 
  ...benefits, 
  ...feedbacks, 
  ...advertisers, 
  ...constructor
];


export const main = {
  path: "/",
  element: (
      <Main />
  ),

  children: [
    {
      path: "/",
      index: true,
      element: <Home />,
    },

     ...routes,
  ],
};
