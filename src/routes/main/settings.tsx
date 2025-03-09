import { SETTINGS } from "@/configs/links/settings";
import { User } from "@/views/Main/Settings/User";
import { Visual } from "@/views/Main/Settings/Visual";


// TODO: разобраться с работай index true и статичным шаблоном

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
