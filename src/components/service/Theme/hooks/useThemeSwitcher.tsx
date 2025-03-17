import { useContext } from "react";

import { ThemeSwitcherContext } from "../Theme.context";

export const useThemeSwitcher = () => useContext(ThemeSwitcherContext);
