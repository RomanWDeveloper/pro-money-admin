import { ThemeType } from "@/types";
import { RootState } from "@/store";
import { Flex, Select, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@/store/themeSlice";

const { Title } = Typography;

export const Visual = () => {
  const theme = useSelector((state: RootState) => state.theme.current);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme) {
      dispatch(setTheme(theme));
    }
  }, [theme]);

  const switchTheme = (value: ThemeType) => {
    dispatch(setTheme(value));
  };

  return (
    <Flex vertical>
      <Title level={4}>Оформление</Title>
      <Select style={{ width: 150 }} onChange={(value) => switchTheme(value as ThemeType)} value={theme}>
        <Select.Option value="light">Светлая тема</Select.Option>
        <Select.Option value="dark">Темная тема</Select.Option>
      </Select>
    </Flex>
  );
};
