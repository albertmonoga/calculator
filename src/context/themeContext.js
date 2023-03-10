import { createContext } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {

  return (
    <ThemeContext.Provider value={{ }}>
      {children}
    </ThemeContext.Provider>
  );
}
