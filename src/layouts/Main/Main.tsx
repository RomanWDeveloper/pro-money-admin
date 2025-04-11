import { Avatar, Badge, Button, Drawer, Flex, Layout } from 'antd';
import { MainMenu } from '@/components/MainMenu';
import { Link, Outlet } from 'react-router-dom';
import { LINKS } from "@/constants/links";
import { HeaderWrapper, CustomAlert, StyledContent, StyledFooter, StyledSider, BellIcon, useMainStyles } from './style';
import { BellFilled } from '@ant-design/icons';
import { useState, useMemo, memo } from 'react';
import { useRequireAuth } from '@/hooks/useRequireAuth';
import { API_AVATAR_URL } from '@/constants/links/api';
import { generateToken } from '@/utils/helpers';
import { useGetMe } from '@/hooks/api/users';

// Выносим компонент аватара в отдельный мемоизированный компонент
const UserAvatar = memo(() => {
  const { data: user } = useGetMe();
  
  // Мемоизируем вычисленное значение токена
  const avatarToken = useMemo(() => {
    return generateToken(user?.email || '');
  }, [user?.email]);

  return (
    <Link to={LINKS.SETTINGS.USER.fullPath}>
      <Avatar size="small" shape="square" src={`${API_AVATAR_URL}/${avatarToken}`} />
    </Link>
  );
});

export const Main = () => {
  const authRedirect = useRequireAuth();
  if (authRedirect) return authRedirect;

  const [openDrawer, setOpenDrawer] = useState(false);
  const styles = useMainStyles();

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <Layout>
      <StyledSider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <MainMenu />
      </StyledSider>
      <Layout>
        <HeaderWrapper style={styles.headerStyle}>
          <Flex align="center" justify="space-between" gap={20}>
            <Badge dot>
              <BellIcon onClick={showDrawer}>
                <BellFilled />
              </BellIcon>
            </Badge>
            <UserAvatar />
          </Flex>
        </HeaderWrapper>
        <StyledContent style={styles.contentStyle}>
          <Outlet />
        </StyledContent>
        <StyledFooter>
          Админ-панель ©{new Date().getFullYear()} | Версия "0.0.2 alpha"
        </StyledFooter>
      </Layout>

      <Drawer title="Уведомления" onClose={onCloseDrawer} open={openDrawer}>
        <CustomAlert
          message="Новый заказ"
          description="Поступил новый заказ. Пожалуйста, проверьте его и подтвердите."
          type="info"
          closable
        />
        <br />
        <CustomAlert
          message="Новый заказ"
          description="Поступил новый заказ. Пожалуйста, проверьте его и подтвердите."
          type="info"
          closable
        />
        <br />
        <CustomAlert
          message="Закончилась оплата по рекламе"
          description="У одного из рекламных аккаунтов закончилась оплата. Пожалуйста, проверьте баланс и пополните его."
          type="warning"
          action={
            <Button size="small">
              Перейти
            </Button>
          }
          closable
        />
        <br />
        <CustomAlert
          message="Ошибка при оплате"
          description="При оплате произошла ошибка. Пожалуйста, попробуйте еще раз."
          type="error"
          closable
        />
      </Drawer>
    </Layout>
  );
};