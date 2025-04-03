import { SETTINGS } from "@/constants/links/settings";
import { User } from "@/views/Main/Settings/User";
import { Visual } from "@/views/Main/Settings/Visual";

export const settings = {
  path: SETTINGS.path, //settings/

  children: [
    {
      index: true,
      path: SETTINGS.VISUAL.path, //settings/visual
      element: <Visual />,
    },
    {
      path: SETTINGS.USER.path, //settings/user
      element: <User />,
    },
  ],
};
