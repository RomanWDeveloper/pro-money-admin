import { Menu } from 'antd';
import styled from 'styled-components';

export const MainMenu = styled(Menu)`
  height: 100%;
  border: none;

  .ant-menu-submenu[path="#"]:not(.ant-menu-submenu-selected) {
    a {
      color: #fff;
    }
  }
`;
