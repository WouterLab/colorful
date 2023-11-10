import { useState } from "react";
import s from "./App.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";

function App() {
  const [count, setCount] = useState(1);

  const countHandlePlus = () => {
    setCount(count + 1);
  };

  const countHandleMinus = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  return (
    <div className={s.app}>
      <div className={s.title}>Colorful</div>
      <div className={s.counter}>
        <AiOutlineMinus className={s.control} onClick={countHandleMinus} />
        <div className={s.number}>{count}</div>
        <AiOutlinePlus className={s.control} onClick={countHandlePlus} />
      </div>
      <div className={s.row}>{Array(count).fill(<ColorPicker />)}</div>
    </div>
  );
}

export default App;
