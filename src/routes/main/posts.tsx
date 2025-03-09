import { POSTS } from "@/configs/links/posts";
import { Posts } from "@/views/Main/Posts";
import { Post } from "@/views/Main/Posts/Post";

export const posts = [
  {
    path: POSTS.path,
    element: <Posts />,
  },
  {
    path: POSTS.path + '/:id',
    element: <Post />,
  },
];
