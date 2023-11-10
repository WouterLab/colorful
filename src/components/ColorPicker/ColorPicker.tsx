import { useState } from "react";
import s from "./ColorPicker.module.scss";

function ColorPicker() {
  const [color, setColor] = useState("#fff");

  return (
    <div className={s.colorPicker}>
      <div className={s.block} style={{ backgroundColor: color }}></div>
      <input
        className={s.picker}
        type='color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}

export { ColorPicker };
