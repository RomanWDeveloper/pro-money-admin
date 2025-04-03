import { FEEDBACKS } from "@/constants/links/feedbacks";
import { Feedbacks } from "@/views/Main/Feedbacks";
import { Feedback } from "@/views/Main/Feedbacks/Feedback";

export const feedbacks = [
  {
    path: FEEDBACKS.path,
    element: <Feedbacks />,
  },
  {
    path: FEEDBACKS.path + '/:id',
    element: <Feedback />,
  },
];
