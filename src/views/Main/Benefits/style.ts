import { Flex } from "antd";
import styled from "styled-components";

export const PostsContent = styled(Flex)`
  width: 100%;
  flex-direction: column;
  gap: 16px;

  .filter-content {
    width: 100%;
  }

  .posts-list {
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