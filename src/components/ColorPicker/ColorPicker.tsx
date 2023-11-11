import { useState } from "react";
import s from "./ColorPicker.module.scss";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  return (
    <div className={s.colorPicker}>
      <div className={s.block} style={{ backgroundColor: color }}></div>
      <div className={s.inputRow}>
        <input
          className={s.picker}
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <div>color: {color}</div>
      </div>
    </div>
  );
}

export { ColorPicker };
