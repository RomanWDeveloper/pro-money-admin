import { CONSTRUCTOR } from "@/constants/links/constructor";
import { CreateArticleGroupResponseDto } from "@/generated-api/requests";
import { useChangeActiveGroup } from "@/hooks/api/constructor";
import { List, Typography, Skeleton } from "antd";
import { Link } from "react-router-dom";

type ListConstructorGroupsProps = {
  groups: CreateArticleGroupResponseDto[];
}

export const ListConstructorGroups = ({ groups }: ListConstructorGroupsProps) => {
  const { mutate: changeActiveGroup } = useChangeActiveGroup();
  const { Text } = Typography;

  const toggleActiveGroup = (id: string, isActive: boolean) => {
    changeActiveGroup({ id, requestBody: { isActive: !isActive } });
  }

  return (
    <List
      className='users-list'
      itemLayout="horizontal"
      dataSource={groups}
      renderItem={(item) => (
        <List.Item
          actions={[
          <a key="list-loadmore-edit" onClick={() => toggleActiveGroup(item.id, item.isActive)}>
            <Text type={item.isActive ? 'success' : 'danger'}> {item.isActive ? 'разблокировать' : 'заблокировать'}</Text>
          </a>,
        ]}
        >
        <Skeleton title={false} active>
            <List.Item.Meta
             
              title={<Link to={`${CONSTRUCTOR.GROUP.fullPath}/${item.id}`}>{item.name}</Link>}
              description={item.description}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};