import { Alert } from "antd";
import { styled } from "styled-components";

export const NotAllowedWrapper = styled(Alert)`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .ant-alert-message {
    font-size: 32px;
  }

  .ant-alert-description {
    font-size: 20px;
  }
`;