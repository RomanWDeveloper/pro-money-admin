import { MainMenu as Menu } from './style';
import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { MenuItem } from './types';
import { prepareMenuItems } from './constants';


export const MainMenu = () => {
  const menuItems = useMemo(() => prepareMenuItems, []);
  const items: MenuItem[] = useMemo(() => menuItems.map((item, index) => {
  const key = (index + 1).toString();
  const menuItem: MenuItem = {
    key,
    path: item.path,
    icon: item.icon,
    label: <Link to={item.path || '#'}>{item.name}</Link>,
    children: item.children?.map((child, childIndex: number) => ({
      key: `${key}.${childIndex + 1}`,
      label: <Link to={child.path || '#'}>{child.name}</Link>,
    })),
  };
  
  return menuItem;
}), [menuItems]);

  const location = useLocation(); 
  const currentPath = location.pathname;
  let currentKey = items.find((item) => {
    return new RegExp(`^${item.path}(/|$)`).test(currentPath);
  })?.key;
  currentKey = currentKey?.toString() || '1';

  return <Menu mode="inline" defaultSelectedKeys={[currentKey]} items={items} />;
};
