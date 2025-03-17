import React from "react";

import { ThemeType } from "./Theme.types";

export const ThemeContext = React.createContext("dark" as ThemeType);
export const ThemeSwitcherContext = React.createContext(() => {});
