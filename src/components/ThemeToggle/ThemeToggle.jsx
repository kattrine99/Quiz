import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export const ThemeToggle = ({ setTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <nav style={{ display: "flex", marginLeft: "auto", padding: "20px" }}>
      <div
        className={`toggle-switch ${theme}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <div className="switch" /> []`12985432\`
      </div>
    </nav>
  );
};

