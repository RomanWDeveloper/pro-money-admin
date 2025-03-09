import { AppContext } from "@/layouts/App/App";
import { ThemeType } from "@/types/types";
import { Flex, Select, Typography } from "antd";
import { useContext, useEffect } from "react";

const { Title } = Typography;

export const Visual = () => {
  const { theme, setTheme } = useContext(AppContext);

  useEffect(() => {
    if (theme) {
      setTheme(theme);
    }
  }, [setTheme]);

  const switchTheme = (value: ThemeType) => {
    setTheme(value);
    localStorage.setItem("theme", value);
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
