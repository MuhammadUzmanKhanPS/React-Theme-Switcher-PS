import React, { ReactNode } from "react";
type Theme = "light" | "dark";
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}
interface ThemeProviderProps {
    children: ReactNode;
}
declare const ThemeProvider: React.FC<ThemeProviderProps>;
declare const useTheme: () => ThemeContextType;
export { ThemeProvider, useTheme };
