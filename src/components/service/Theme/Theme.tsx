import { FC, ReactElement, useCallback, useState } from "react";

import { ThemeContext, ThemeSwitcherContext } from "./Theme.context";
import { IThemeProps } from "./Theme.types";

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
