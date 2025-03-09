import { Flex } from "antd";
import styled from "styled-components";

export const UsersContent = styled(Flex)`
  width: 100%;
  flex-direction: column;
  gap: 16px;

  .filter-content {
    width: 100%;
    justify-content: space-between;
  }

  .users-list {
    width: 100%;
  }

  .status {
    &.status-active {
      display: none;
    }
    &.status-not-active {
      color: #f5222d;
    }
  }
`;