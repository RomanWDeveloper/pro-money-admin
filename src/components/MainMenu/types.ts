import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>['items'][number] & { path?: string };
type prepareMenuItem = {
  path?: string;
  name: string;
  icon?: React.ReactNode;
  children?: prepareMenuItem[];
};

export type { MenuItem, prepareMenuItem };