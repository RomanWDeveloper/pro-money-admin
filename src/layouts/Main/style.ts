import { Alert, Flex, Layout, theme } from "antd";
import { Header, Content as AntContent, Footer as AntFooter } from "antd/es/layout/layout";
import { styled } from "styled-components";

export const useMainStyles = () => {
  const { token } = theme.useToken();
  
  return {
    headerStyle: {
      backgroundColor: token.colorBgLayout
    },
    contentStyle: {
      backgroundColor: token.colorBgContainer
    }
  };
};

export const ContentWrapper = styled(Flex)`
  flex-shrink: 1;
  flex-grow: 1;
  max-width: 1960px;
  padding: 20px;
  margin: 0 auto;
  width: 100%;
`;

export const HeaderWrapper = styled(Header)`
  height: 30px;
  padding: 20px  24px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CustomAlert = styled(Alert)`
  flex-direction: column;
  padding-left: 28px;

  .ant-alert-close-icon {
    position: absolute;
    left: 0;
    top: 25px;
  }

  .ant-alert-action {
    margin-top: 10px;
  }
`;

export const StyledSider = styled(Layout.Sider)`
  /* Здесь могут быть дополнительные стили для Sider */
`;

export const StyledContent = styled(AntContent)`
  margin: 24px;
  padding: 20px;
`;

export const StyledFooter = styled(AntFooter)`
  text-align: center;
`;

export const BellIcon = styled.div`
  font-size: 20px;
  cursor: pointer;
`;