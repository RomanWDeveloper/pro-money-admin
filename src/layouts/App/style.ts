import { Layout } from "antd";
import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme?.token?.colorBgBase};
  }
`;

export const AppWrapper = styled(Layout)`
  min-height: 100dvh;
  min-width: 100dvw;
  position: relative;
  overflow-x: hidden;
`;
