import  { useEffect, useState } from 'react';
import { Button, Flex } from 'antd';
import {  useNavigate } from 'react-router-dom';
import { UsersContent } from './style';
import { useUsersList } from '@/hooks/api/users';
import { USERS } from '@/constants/links/users';
import { ListUsers } from '@/components/ListUsers';
import { ListSort } from '@/components/ListSort';
import { ListSearch } from '@/components/ListSearch';
import { useUserBan, useUserDelete } from '@/hooks/UserHooks';
import { UserSortDirection, UserSortOption, UserSortOptions } from '@/types';

const userSortOptions: UserSortOptions = [
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

export const Users = () => {
  const navigate = useNavigate();
  const [initLoading, setInitLoading] = useState(true);
  const [sortField, setSortField] = useState<UserSortOption>('createdAt');
  const [sortDirection, setSortDirection] = useState<UserSortDirection>('asc');

  const {
      data: usersList, 
      isLoading: isLoadingUsersList, 
      refetch: refetchUsersList
    } = useUsersList({ orderBy: sortField, orderByDirection: sortDirection });

  const deleteUser = useUserDelete();
  const banUser = useUserBan();

  useEffect(() => {
    setInitLoading(false);
  }, []);

  const handleDeleteUser = (id: string, isDeleted: boolean) => {
    deleteUser(id, isDeleted, () => {
      refetchUsersList();
    });
  };

  const handleBanUser = (id: string, isActive: boolean) => {
    banUser(id, isActive, () => {
      refetchUsersList();
    });
  };

  const handleSortChange = (value: UserSortOption) => {
    setSortField(value);
  };

  const handleDirectionChange = (direction: UserSortDirection) => {
    setSortDirection(direction);
  };

  return (
    <UsersContent>
      <Flex className="filter-content">
          <Button type="primary" onClick={() => navigate(USERS.CREATE.fullPath)}>Добавить</Button>
          <ListSort 
            options={userSortOptions}
            handleChange={handleSortChange}
            onDirectionChange={handleDirectionChange}
          />
          <ListSearch 
            onSearchStart={() => {}}
          />
      </Flex>
      <ListUsers 
        usersList={usersList?.users || []} 
        isLoadingUsersList={isLoadingUsersList} 
        initLoading={initLoading} 
        toggleDeleteUser={handleDeleteUser}
        toggleBanUser={handleBanUser}
      />
    </UsersContent>
  );
};