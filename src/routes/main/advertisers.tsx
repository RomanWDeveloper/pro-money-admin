import { ADVERTISERS } from "@/constants/links/advertisers";
import { Advertisers } from "@/views/Main/Advertisers";
import { Advertiser } from "@/views/Main/Advertisers/Advertiser";

export const advertisers = [
  {
    path: ADVERTISERS.path,
    element: <Advertisers />,
  },
  {
    path: ADVERTISERS.path + '/:id',
    element: <Advertiser />,
  },
];
