/* eslint-disable react-refresh/only-export-components */
import React, {
	FC,
	ReactElement,
	useCallback,
	useContext,
	useState,
} from "react";

import { IThemeProps, ThemeType } from "./Theme.types";

const ThemeContext = React.createContext("dark" as ThemeType);
const ThemeSwitcherContext = React.createContext(() => {});

export const useTheme = () => useContext(ThemeContext);

export const useThemeSwitcher = () => useContext(ThemeSwitcherContext);

export const ThemeProvider: FC<IThemeProps> = ({
	renderChildren,
	defaultTheme = "dark",
}): ReactElement => {
	const [theme, setTheme] = useState(defaultTheme);

	const switchTheme = useCallback(() => {
		console.log("change theme");
		setTheme((currentTheme) =>
			currentTheme === "dark" ? "light" : "dark"
		);
	}, []);

	return (
		<ThemeContext.Provider value={theme}>
			<ThemeSwitcherContext.Provider value={switchTheme}>
				{renderChildren()}
			</ThemeSwitcherContext.Provider>
		</ThemeContext.Provider>
	);
};
