import { Alert, Flex } from "antd";
import { Header } from "antd/es/layout/layout";
import { styled } from "styled-components";

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