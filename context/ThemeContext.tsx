import { createContext } from "react";

type IsDarkType = {
  isDark: boolean;
  handleDark: Function;
};

export const ThemeContext = createContext<IsDarkType>({
  isDark: false,
  handleDark: () => {},
});
