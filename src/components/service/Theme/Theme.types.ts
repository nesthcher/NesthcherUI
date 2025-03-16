import { RenderChildren } from "../../../helpers";

export type ThemeType = "dark" | "light";

export interface IThemeProps extends RenderChildren {
	defaultTheme?: ThemeType;
}
