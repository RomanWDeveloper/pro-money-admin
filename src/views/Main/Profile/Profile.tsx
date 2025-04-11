import { Flex } from 'antd';
import { UserProfile } from '@/components/UserProfile';

export const Profile = () => {
  return (
    <Flex justify="center" align="center" style={{ padding: '24px' }}>
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <UserProfile />
      </div>
    </Flex>
  );
}; 