import React, { useState } from "react";
import Button from "./components/Button";
import Content from "./components/Content";
import { ThemeProvider } from "./contexts/ThemeContext";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  function handleTheme() {
    const newTheme = theme == "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <ThemeProvider value={theme}>
      <Button handleTheme={handleTheme} />
      <Content />
    </ThemeProvider>
  );
}

export default App;
