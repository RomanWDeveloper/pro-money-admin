import { Flex, Skeleton } from "antd";
import { styled } from "styled-components";

export const CardWrapper = styled(Flex)`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 28px;
    width: 100%;
`;

export const HostsWrapper = styled(Flex)`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const StyledSkeleton = styled(Skeleton)`
    background-color: ${({ theme }) => theme.colorBgElevated};
    border-radius: 8px;
    height: 178px;
    width: 100%;
    padding: 16px;

    .ant-skeleton-title {
        margin: 0;
        margin-bottom: 5px;
    }

    .ant-skeleton-paragraph {
        margin: 0;
    }
`;