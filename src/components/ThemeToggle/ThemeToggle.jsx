import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const ThemeToggle = ({ setTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <nav className="nav-class">
      <div
        className={`toggle-switch ${theme}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <div className="switch" /> 
      </div>
    </nav>
  );
};

