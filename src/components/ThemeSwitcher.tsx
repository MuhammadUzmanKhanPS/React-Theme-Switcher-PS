import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider>
      <div
        style={{
          height: "100vh",
        }}
      >
        <div
          style={{
            backgroundColor: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "space-between",
            padding: "2px",
          }}
        >
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: "#007BFF",
              color: "#fff",
              padding: "10px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              position: "fixed",
              top: 0,
            }}
          >
            Switch to Dark Mode
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
