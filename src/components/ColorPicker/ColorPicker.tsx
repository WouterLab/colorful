import { useState, useContext } from "react";

import s from "./ColorPicker.module.scss";
import { ThemeContext } from "../../App";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");
  const [secondColor, setSecondColor] = useState("#7afffd");
  const [isGradient, setIsGradient] = useState(false);
  const theme = useContext(ThemeContext);

  const getBlockStyles = () => {
    if (isGradient) {
      return {
        background: `linear-gradient(30deg, ${color} 0%, ${secondColor} 100%)`,
      };
    } else
      return {
        backgroundColor: color,
      };
  };

  const themeButton = theme === "dark" ? s.buttonDark : s.buttonLight;
  const themeColor = theme === "dark" ? s.colorDark : s.colorLight;
  const themePicker = theme === "dark" ? s.pickerDark : s.pickerLight;

  return (
    <div className={s.colorPicker}>
      <div className={s.block} style={getBlockStyles()}></div>
      <div
        className={`${s.gradientButton} ${themeButton}`}
        onClick={() => setIsGradient(!isGradient)}
      >
        gradient {isGradient ? "on" : "off"}
      </div>
      <div className={s.inputRow}>
        <input
          className={`${s.picker} ${themePicker}`}
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <div>color: </div>
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          maxLength={7}
          className={`${s.hex} ${themeColor}`}
        />
      </div>
      {isGradient && (
        <div className={s.inputRow}>
          <input
            className={s.picker}
            type='color'
            value={secondColor}
            onChange={(e) => setSecondColor(e.target.value)}
          />
          <div>color: </div>
          <input
            type='text'
            value={secondColor}
            onChange={(e) => setSecondColor(e.target.value)}
            maxLength={7}
            className={`${s.hex} ${themeColor}`}
          />
        </div>
      )}
    </div>
  );
}

export { ColorPicker };
