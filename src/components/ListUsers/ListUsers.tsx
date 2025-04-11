import { Avatar, List, Skeleton, Typography } from "antd";
import { API_AVATAR_URL } from '@/constants/links/api';
import { USERS } from "@/constants/links/users";
import { generateToken } from '@/utils/helpers';
import { UserResponseDto } from "@/generated-api/requests";
import { Link } from "react-router-dom";

type ListUsersProps = {
  usersList: UserResponseDto[];
  isLoadingUsersList: boolean;
  initLoading: boolean;
  toggleDeleteUser: (id: string, isActive: boolean) => void;
  toggleBanUser: (id: string, isActive: boolean) => void;
};

export const ListUsers = ({ usersList, isLoadingUsersList, initLoading, toggleDeleteUser, toggleBanUser }: ListUsersProps) => {
  const { Text } = Typography;
  const getDisplayName = (item: UserResponseDto): string => {
    if (isValidName(item.name)) {
      return (item.name as unknown) as string;
    }

    return item.email || '';
  };

  const isValidName = (name: unknown): boolean => {
    return name !== null && typeof name === 'string' && name.trim() !== '';
  };

  return (
      <List
        className='users-list'
        loading={initLoading}
        itemLayout="horizontal"
        dataSource={usersList}
        renderItem={(item) => (
        <List.Item
          actions={[
          <a key="list-loadmore-edit" onClick={() => toggleBanUser(item.id, item.isBanned)}>
            <Text type={item.isBanned ? 'success' : 'danger'}> {item.isBanned ? 'разблокировать' : 'заблокировать'}</Text>
          </a>,
          <a key="list-loadmore-edit" onClick={() => toggleDeleteUser(item.id, item.isDeleted)}>
           <Text type={item.isDeleted ? 'success' : 'danger'}> {item.isDeleted ? 'восстановить' : 'удалить'}</Text>
          </a>

        ]}
        >
          <Skeleton avatar title={false} loading={isLoadingUsersList} active>
            <List.Item.Meta
              avatar={<Avatar src={`${API_AVATAR_URL}/${generateToken(item.email)}`} />}
              title={<Link to={`${USERS.path}/${item.id}`}>{getDisplayName(item)}</Link>}
              description={isValidName(item.name) ? `${item.email || ''}` : ''}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  )
}