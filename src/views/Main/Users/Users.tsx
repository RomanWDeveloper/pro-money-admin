import  { useEffect, useState } from 'react';
import { Avatar, Button, Flex, GetProps, Input, List, Select, Skeleton } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { UsersContent } from './style';
import { ArrowUpOutlined } from '@ant-design/icons';
import { useUsersList } from '@/utils/api/users';
import { USERS } from '@/constants/links/users';
import { generateToken } from '@/utils/helpers';
import { API_AVATAR_URL } from '@/constants/links/api';

export const Users = () => {
  type SearchProps = GetProps<typeof Input.Search>;

  const navigate = useNavigate();
  const [initLoading, setInitLoading] = useState(true);

  const {data: usersList, isLoading: isLoadingUsersList} = useUsersList();

  const { Search } = Input;
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
  const [arrowDirection, setArrowDirection] = useState<'up' | 'down'>('up'); // Добавьте состояние для направления стрелки

  const handleChange = (value: string) => {
    console.log(value);
  };

  const handleArrowClick = () => {
    setArrowDirection(prev => (prev === 'up' ? 'down' : 'up')); // Переключите направление стрелки
  };
  
  // Функция для проверки валидности имени пользователя
  const isValidName = (name: any): boolean => {
    return name !== null && typeof name === 'string';
  };

  // Функция для получения отображаемого имени пользователя
  const getDisplayName = (item: any): string => {
    return isValidName(item.name) ? item.name : String(item.email || '');
  };

  // Убирает загрузку списка пользователей
  useEffect(() => {
    setInitLoading(false);
  }, []);

  return (
    <UsersContent>
      <Flex className="filter-content">
          <Button type="primary" onClick={() => navigate(USERS.CREATE.fullPath)}>Добавить</Button>

          <Flex style={{ marginLeft: 'auto', marginRight: 10 }} gap={10} align="center">
              <ArrowUpOutlined onClick={handleArrowClick} style={{ transform: arrowDirection === 'down' ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              <Select
                placeholder="Сортировать"
                style={{ width: 250 }}
                onChange={handleChange}
              options={[
                { value: 'title', label: 'по названию' },
                { value: 'description', label: 'по описанию' },
                { value: 'views_count', label: 'по количеству просмотров' },
                { value: 'created_at', label: 'по дате создания' },
                { value: 'created_at', label: 'по сроку действия' },
              ]}
            />
          </Flex>
          <Search placeholder="Поиск" onSearch={onSearch} style={{ width: 200 }} />
      </Flex>
      <List
        className='users-list'
        loading={initLoading}
        itemLayout="horizontal"
        dataSource={usersList?.users}
        renderItem={(item) => (
        <List.Item
          actions={[<a key="list-loadmore-edit">удалить</a>]}
        >
          <Skeleton avatar title={false} loading={isLoadingUsersList} active>
            <List.Item.Meta
              avatar={<Avatar src={`${API_AVATAR_URL}/${generateToken(item.email)}`} />}
              title={<Link to={`${USERS.path}/${item.id}`}>{getDisplayName(item)}</Link>}
              description={isValidName(item.name) ? String(item.email || '') : ''}
            />
          </Skeleton>
        </List.Item>
      )}
    />
    </UsersContent>
  );
};