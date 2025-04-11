import { CONSTRUCTOR } from "@/constants/links/constructor";
import { Constructor } from "@/views/Main/Constructor";
import { Groups } from "@/views/Main/Constructor/Groups";
import { Group } from "@/views/Main/Constructor/Groups/Group";
import { Templates } from "@/views/Main/Constructor/Templates";

export const constructor = [
  {
    path: CONSTRUCTOR.path,
    element: <Constructor />,
      children: [
        {
          path: CONSTRUCTOR.TEMPLATE.path,
          element: <Templates />,
        },
        {
          path: CONSTRUCTOR.GROUP.path,
          element: <Groups />,
        },
     ],
  },

  {
    path: CONSTRUCTOR.TEMPLATE.CREATE.fullPath,
    element: <Templates />,
  },
  {
    path: CONSTRUCTOR.GROUP.CREATE.fullPath,
    element: <Group />,
  },
  {
    path: CONSTRUCTOR.GROUP.fullPath + '/:id',
    element: <Group />,
  },
];
