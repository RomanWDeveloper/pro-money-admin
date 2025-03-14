// import { Flex } from "antd";
import { ConfigProvider } from "antd";
import ruRU from "antd/es/locale/ru_RU";
import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { Theme } from "@/configs/theme";
import { ThemeType } from "@/types/types";
import { AppWrapper, GlobalStyle } from "./style";

interface AppContextType {
	theme: ThemeType;
	setTheme: (theme: ThemeType) => void;
}
export const AppContext = createContext({} as AppContextType);
export const App = () => {
	const defaultTheme: ThemeType = "dark";
	const storedTheme = localStorage.getItem("theme") as ThemeType;
	const [theme, setTheme] = useState<ThemeType>(storedTheme || defaultTheme);

	const initContext = {
		theme,
		setTheme: (newTheme: ThemeType) => {
			setTheme(newTheme);
			localStorage.setItem("theme", newTheme);
		},
	};

	return (
		<>
			<AppContext.Provider value={initContext}>
				<ConfigProvider locale={ruRU} theme={Theme[theme]}>
					<GlobalStyle theme={Theme[theme]} />
					<AppWrapper>
						<Outlet />
					</AppWrapper>
				</ConfigProvider>
			</AppContext.Provider>
		</>
	);
};
