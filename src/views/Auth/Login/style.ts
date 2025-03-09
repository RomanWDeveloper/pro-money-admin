import { Card as AntFlex } from "antd";
import styled from "styled-components";

export const Flex = styled(AntFlex)`
    padding: 15px;
    border-radius: 10px;
    width: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    justify-content: center;
    padding: 20px;

    .ant-card-body {
        padding: 0;
    }
`
