import  { useEffect, useState } from 'react';
import { Button, Flex, GetProps, Input, List, Select, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { PostsContent } from './style';
import { ArrowUpOutlined } from '@ant-design/icons';
import { LINKS } from '@/constants/links';
interface DataType {
  id: string;
  title: string;
  description: string;
}

const count = 5; // Изменено на 5
export const fakePostsData: DataType[] = [
  {
    id: '1',
    title: 'Рекламодатель 1',
    description: 'Описание рекламодателя 1',
  },
  {
    id: '2',
    title: 'Рекламодатель 2',
    description: 'Описание рекламодателя 2',
  },
  {
    id: '3',
    title: 'Рекламодатель 3',
    description: 'Описание рекламодателя 3',
  },
  {
    id: '4',
    title: 'Рекламодатель 4',
    description: 'Описание рекламодателя 4',
  },
  {
    id: '5',
    title: 'Рекламодатель 5',
    description: 'Описание рекламодателя 5',
  },
];

export const Advertisers = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data] = useState<DataType[]>(fakePostsData); 
  const [list, setList] = useState<DataType[]>(fakePostsData);

  useEffect(() => {
    setInitLoading(false);
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        Array.from({ length: count }).map(() => ({id: '', title: '', description: '' })),
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
    <PostsContent>
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
        className='posts-list'
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
        <List.Item
          actions={[<a key="list-loadmore-edit">заблокировать</a>]}
        >
          <Skeleton avatar title={false} loading={false} active>
            <List.Item.Meta
              title={<Link to={`${LINKS.ADVERTISERS.path}/${item.id}`}> {item.title}</Link>}
              description={item.description}
            />
          </Skeleton>
        </List.Item>
      )}
    />
    </PostsContent>
  );
};