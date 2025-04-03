import {
  HomeFilled,
  SettingFilled,
  CrownFilled,
  FireFilled,
  MessageFilled,
  NotificationFilled,
  SmileFilled,
} from '@ant-design/icons';
import { Badge, type MenuProps } from 'antd';
import { MainMenu as Menu } from './style';
import { Link, useLocation } from 'react-router-dom';
import { LINKS } from '@/constants/links';

type MenuItem = Required<MenuProps>['items'][number] & { path?: string };
type prepareMenuItem = {
  path?: string;
  name: string;
  icon?: React.ReactNode;
  children?: prepareMenuItem[];
};

const prepareMenuItems: prepareMenuItem[] = [
  {
    path: '/',
    name: 'Главная',
    icon: <HomeFilled />,
  },
  {
    path: LINKS.BENEFITS.path,
    name: 'Выгода',
    icon: <FireFilled />,
  },
  {
    path: LINKS.FEEDBACKS.path,
    name: 'Обратная связь',
    icon: <Badge dot><MessageFilled /></Badge>,
  },
  {
    path: LINKS.POSTS.path,
    name: 'Посты',
    icon: <NotificationFilled />,
  },
  {
    path: LINKS.ADVERTISERS.path,
    name: 'Рекламодатели',
    icon: <CrownFilled />,
  },
  {
    path: LINKS.USERS.path,
    name: 'Пользователи',
    icon: <SmileFilled />,
  },
  {
    path: '#',
    name: 'Настройки',
    icon: <SettingFilled />,
    children: [
      {
        path: LINKS.SETTINGS.VISUAL.fullPath,
        name: 'Приложение',
      },
      {
        path: LINKS.SETTINGS.USER.fullPath,
        name: 'Профиль',
      },
    ],
  },
];

const items: MenuItem[] = prepareMenuItems.map((item, index) => {
  const key = (index + 1).toString();
  const menuItem: MenuItem = {
    key,
    path: item.path,
    icon: item.icon,
    label: <Link to={item.path || '#'}>{item.name}</Link>,
    children: item.children?.map((child, childIndex) => ({
      key: `${key}.${childIndex + 1}`,
      label: <Link to={child.path || '#'}>{child.name}</Link>,
    })),
  };
  
  return menuItem;
});

export const MainMenu = () => {
  const location = useLocation(); 
  const currentPath = location.pathname;
  let currentKey = items.find((item) => {
    return new RegExp(`^${item.path}(/|$)`).test(currentPath);
  })?.key;
  currentKey = currentKey?.toString() || '1';

  return <Menu mode="inline" defaultSelectedKeys={[currentKey]} items={items} />;
};
