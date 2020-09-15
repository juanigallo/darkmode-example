import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import "./style.css";

function Button(props) {
  const theme = useContext(ThemeContext);

  return (
    <button className={theme} onClick={() => props.handleTheme()}>
      Soy un boton
    </button>
  );
}

export default Button;
