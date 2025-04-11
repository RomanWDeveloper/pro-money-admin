import { UserSortOptions } from '@/types';

export const userSortOptions: UserSortOptions = [
  {
    label: 'По почте',
    value: 'email',
  },
  {
    label: 'По дате регистрации',
    value: 'createdAt',
  },
  {
    label: 'По логину',
    value: 'login',
  },
  {
    label: 'По имени',
    value: 'name',
  },
];