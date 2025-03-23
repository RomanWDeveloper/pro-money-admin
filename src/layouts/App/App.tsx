// import { Flex } from "antd";
import { ConfigProvider } from "antd";
import ruRU from "antd/es/locale/ru_RU";
import { Outlet } from "react-router-dom";
import { Theme } from "@/configs/theme";
import { AppWrapper, GlobalStyle } from "./style";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const App = () => {
	const theme = useSelector((state: RootState) => state.theme.current);

	return (
		<ConfigProvider locale={ruRU} theme={Theme[theme as keyof typeof Theme]}>
			<GlobalStyle theme={Theme[theme as keyof typeof Theme]} />
			<AppWrapper>
					<Outlet />
			</AppWrapper>
		</ConfigProvider>
	);
};
