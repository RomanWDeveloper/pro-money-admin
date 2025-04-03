import { Avatar, Badge, Button, Drawer, Flex, Layout, theme } from 'antd';
import { MainMenu } from '@/components/MainMenu';
import { Link, Outlet } from 'react-router-dom';
import { LINKS } from "@/constants/links";
import { HeaderWrapper, CustomAlert } from './style';
import { BellFilled, UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { redirectToLoginIfNoToken } from '@/utils/helpers';


const { Content, Footer, Sider } = Layout;

export const Main = () => {
   useEffect(() => {
    redirectToLoginIfNoToken();
  }, []);

  const { token } = theme.useToken();
  const [openDrawer, setOpenDrawer] = useState(false);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <MainMenu />
      </Sider>
      <Layout>
        <HeaderWrapper style={{ backgroundColor: token.colorBgLayout }}>
          <Flex align="center" justify="space-between" gap={20}>
            <Badge dot>
              <BellFilled style={{ fontSize: 20 }} onClick={showDrawer} />
            </Badge>
            <Link to={LINKS.SETTINGS.USER.fullPath}>
              <Avatar size="small" shape="square" icon={<UserOutlined />} />
            </Link>
          </Flex>
        </HeaderWrapper>
        <Content style={{ backgroundColor: token.colorBgContainer, margin: '24px', padding: '20px' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Админ-панель ©{new Date().getFullYear()} | Версия "0.0.1 alpha"
        </Footer>
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