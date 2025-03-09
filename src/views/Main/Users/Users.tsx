import  { useEffect, useState } from 'react';
import { Avatar, Button, Flex, GetProps, Input, List, Select, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { UsersContent } from './style';
import { ArrowUpOutlined } from '@ant-design/icons';
interface DataType {
  id?: string;
  gender?: string;
  name: {
    first?: string;
    last?: string;
  };
  email?: string;
  picture: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  loading: boolean;
  status: 'confirmed' | 'not_confirmed';
}

const count = 5; // Изменено на 5
export const fakeUsersData: DataType[] = [
  {
    id: '1',
    name: {first: 'Иван', last: 'Иванов' },
    email: 'ivan.ivanov@example.com',
    picture: { large: 'https://randomuser.me/api/portraits/men/1.jpg' },
    loading: false,
    status: 'confirmed',
  },
  {
    id: '2',
    name: {first: 'Мария', last: 'Петрова' },
    email: 'maria.petrova@example.com',
    picture: { large: 'https://randomuser.me/api/portraits/women/2.jpg' },
    loading: false,
    status: 'not_confirmed',
  },
  {
    id: '3',
    name: {first: 'Сергей', last: 'Сидоров' },
    email: 'sergey.sidorov@example.com',
    picture: { large: 'https://randomuser.me/api/portraits/men/3.jpg' },
    loading: false,
    status: 'not_confirmed',
  },
  {
    id: '4',
    name: {first: 'Анна', last: 'Кузнецова' },
    email: 'anna.kuznetsova@example.com',
    picture: { large: 'https://randomuser.me/api/portraits/women/4.jpg' },
    loading: false,
    status: 'not_confirmed',
  },
  {
    id: '5',
    name: {first: 'Дмитрий', last: 'Смирнов' },
    email: 'dmitry.smirnov@example.com',
    picture: { large: 'https://randomuser.me/api/portraits/men/5.jpg' },
    loading: false,
    status: 'confirmed',
  },
];

export const Users = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data] = useState<DataType[]>(fakeUsersData); 
  const [list, setList] = useState<DataType[]>(fakeUsersData);

  useEffect(() => {
    setInitLoading(false);
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        Array.from({ length: count }).map(() => ({ loading: true, name: {}, picture: {}, status: 'not_confirmed' })),
      ),
    );
    setLoading(false);
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>загрузить еще</Button>
      </div>
    ) : null;
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
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
        <List.Item
          actions={[<a key="list-loadmore-edit">заблокировать</a>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<Link to={`/users/${item.id}`}> {item.name?.first} {item.name?.last}</Link>}
              description={item.email}
            />
            <div className={`status ${item.status === 'confirmed' ? 'status-active' : 'status-not-active'}`}>{item.status === 'confirmed' ? 'подтвержден' : 'не подтвержден'}</div>
          </Skeleton>
        </List.Item>
      )}
    />
    </UsersContent>
  );
};