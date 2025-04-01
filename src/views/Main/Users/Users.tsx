import  { useEffect, useState } from 'react';
import { Avatar, Button, Flex, GetProps, Input, List, Select, Skeleton } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { UsersContent } from './style';
import { ArrowUpOutlined } from '@ant-design/icons';
import { useUsersList } from '@/utils/apiMethods';
import { USERS } from '@/configs/links/users';

export const Users = () => {
  const navigate = useNavigate();
  const [initLoading, setInitLoading] = useState(true);

  const {data: usersList, isLoading: isLoadingUsersList} = useUsersList();

  useEffect(() => {
    setInitLoading(false);
  }, []);

  type SearchProps = GetProps<typeof Input.Search>;
  const { Search } = Input;
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
  const [arrowDirection, setArrowDirection] = useState<'up' | 'down'>('up'); // Добавьте состояние для направления стрелки

  const handleChange = (value: string) => {
    console.log(value);

    
  };

  const handleArrowClick = () => {
    setArrowDirection(prev => (prev === 'up' ? 'down' : 'up')); // Переключите направление стрелки
  };

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
          actions={[<a key="list-loadmore-edit">заблокировать</a>]}
        >
          <Skeleton avatar title={false} loading={isLoadingUsersList} active>
            <List.Item.Meta
              
              title={<Link to={`/users/${item.id}`}> {name !== null && typeof name === 'string'  ? '': item.email}</Link>}
              description={item.email}
            />
            <div className={`status ${item.isVerified ? 'status-active' : 'status-not-active'}`}>{item.isVerified ? 'подтвержден' : 'не подтвержден'}</div>
          </Skeleton>
        </List.Item>
      )}
    />
    </UsersContent>
  );
};