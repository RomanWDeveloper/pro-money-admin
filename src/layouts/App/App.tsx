// import { Flex } from "antd";
import { App as AntApp, ConfigProvider } from "antd";
import ruRU from "antd/es/locale/ru_RU";
import { Outlet } from "react-router-dom";
import { Theme } from "@/configs/theme";
import { AppWrapper, GlobalStyle } from "./style";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { setupErrorHandlers } from "@/configs/queryClient";
import { useEffect } from "react";

const AppContent = () => {
	const { notification } = AntApp.useApp();
	
	useEffect(() => {
		setupErrorHandlers(notification);
	}, [notification]);

	return (
		<AppWrapper>
			<Outlet />
		</AppWrapper>
	);
};


export const App = () => {
	const theme = useSelector((state: RootState) => state.theme.current);

	return (
		<ConfigProvider locale={ruRU} theme={Theme[theme as keyof typeof Theme]}>
			<GlobalStyle theme={Theme[theme as keyof typeof Theme]} />
			<AntApp>
				<AppContent />
			</AntApp>
		</ConfigProvider>
	);
};

