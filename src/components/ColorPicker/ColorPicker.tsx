import { useState, useContext } from "react";

import s from "./ColorPicker.module.scss";
import { ThemeContext } from "../../App";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");
  const [secondColor, setSecondColor] = useState("#ffffff");
  const [isGradient, setIsGradient] = useState(false);
  const theme = useContext(ThemeContext);

  const getBlockStyles = () => {
    if (isGradient) {
      return {
        background: `linear-gradient(45deg, ${color} 0%, ${color} 40%, ${secondColor} 100%)`,
      };
    } else
      return {
        backgroundColor: color,
      };
  };

  const themeButton = theme === "dark" ? s.buttonDark : s.buttonLight;

  return (
    <div className={s.colorPicker}>
      <div className={s.block} style={getBlockStyles()}></div>
      <div className={s.inputRow}>
        <input
          className={s.picker}
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <div>color: {color}</div>
      </div>
      {isGradient && (
        <div className={s.inputRow}>
          <input
            className={s.picker}
            type='color'
            value={secondColor}
            onChange={(e) => setSecondColor(e.target.value)}
          />
          <div>color: {secondColor}</div>
        </div>
      )}
      <div
        className={`${s.gradientButton} ${themeButton}`}
        onClick={() => setIsGradient(!isGradient)}
      >
        gradient {isGradient ? "on" : "off"}
      </div>
    </div>
  );
}

export { ColorPicker };
