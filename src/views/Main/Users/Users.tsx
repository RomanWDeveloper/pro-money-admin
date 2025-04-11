import  { useCallback, useState } from 'react';
import { Button, Flex } from 'antd';
import {  useNavigate } from 'react-router-dom';
import { UsersContent } from './style';
import { useUsersList } from '@/hooks/api/users';
import { USERS } from '@/constants/links/users';
import { ListUsers } from '@/components/ListUsers';
import { ListSort } from '@/components/ListSort';
import { ListSearch } from '@/components/ListSearch';
import { useUserBan, useUserDelete } from '@/hooks/UserHooks';
import { UserSortDirection, UserSortOption } from '@/types';
import { userSortOptions } from './constants';


export const Users = () => {
  const navigate = useNavigate();
  const [sortField, setSortField] = useState<UserSortOption>('createdAt');
  const [sortDirection, setSortDirection] = useState<UserSortDirection>('asc');

  const {
      data: usersList, 
      isLoading: isLoadingUsersList, 
      refetch: refetchUsersList
    } = useUsersList({ orderBy: sortField, orderByDirection: sortDirection });

  const deleteUser = useUserDelete();
  const banUser = useUserBan();


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

  const handleSortChange = useCallback((value: UserSortOption) => {
    setSortField(value);
  }, []);

  const handleDirectionChange = useCallback((direction: UserSortDirection) => {
    setSortDirection(direction);
  }, []);

  const handleSearchStart = useCallback((value?: string) => {
    // Здесь в будущем можно добавить логику поиска
    console.log('Search started:', value);
  }, []);

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
            onSearchStart={handleSearchStart}
          />
      </Flex>
      <ListUsers 
        usersList={usersList?.users || []} 
        isLoadingUsersList={isLoadingUsersList} 
        toggleDeleteUser={handleDeleteUser}
        toggleBanUser={handleBanUser}
      />
    </UsersContent>
  );
};