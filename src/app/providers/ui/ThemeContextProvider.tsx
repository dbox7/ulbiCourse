import { FC, PropsWithChildren, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {

  const [theme, setTheme] = useState(defaultTheme);

  const dafaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return ( 
    <ThemeContext.Provider value={dafaultProps}>
      {children}
    </ThemeContext.Provider>
  );
}