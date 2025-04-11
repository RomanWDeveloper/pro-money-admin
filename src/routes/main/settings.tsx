import { SETTINGS } from "@/constants/links/settings";
import { User } from "@/views/Main/Settings/User";
import { Visual } from "@/views/Main/Settings/Visual";

export const settings = {
  path: SETTINGS.path,

  children: [
    {
      index: true,
      path: SETTINGS.VISUAL.path,
      element: <Visual />,
    },
    {
      path: SETTINGS.USER.path,
      element: <User />,
    },
  ],
};
