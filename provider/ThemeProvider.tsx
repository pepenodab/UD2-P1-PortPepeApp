import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import React from "react";

type themeProviderProps = {
  children: React.ReactNode[];
};

const ThemeProvider = ({ children }: themeProviderProps) => {
  const [isDark, setIsDark] = useState(false);

  const handleDark = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, handleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
