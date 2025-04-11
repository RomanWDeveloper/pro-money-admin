import {
  HomeFilled,
  SettingFilled,
  CrownFilled,
  FireFilled,
  MessageFilled,
  NotificationFilled,
  SmileFilled,
  ProductFilled,
} from '@ant-design/icons';
import { Badge } from 'antd';
import { prepareMenuItem } from './types';
import { LINKS } from '../../constants/links';



const prepareMenuItems: prepareMenuItem[] = [
  {
    path: '/',
    name: 'Главная',
    icon: <HomeFilled />,
  },
  {
    path: LINKS.CONSTRUCTOR.path,
    name: 'Конструктор',
    icon: <ProductFilled />,
    children: [
      {
        path: LINKS.CONSTRUCTOR.TEMPLATE.fullPath,
        name: 'Шаблоны',
      },
      {
        path: LINKS.CONSTRUCTOR.GROUP.fullPath,
        name: 'Группы',
      },
    ],
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

export { prepareMenuItems }; 