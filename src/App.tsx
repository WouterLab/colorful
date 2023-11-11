import { useState, createContext } from "react";
import s from "./App.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import { ThemeChanger } from "./components/ThemeChanger/ThemeChanger";

export const ThemeContext = createContext("dark");

function App() {
  const [count, setCount] = useState(1);
  const [theme, setTheme] = useState("dark");

  const countHandlePlus = () => {
    setCount(count + 1);
  };

  const countHandleMinus = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else setTheme("dark");
  };

  const themeStyles = theme === "dark" ? s.dark : s.light;

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`${s.app} ${themeStyles}`}>
        <div className={s.title}>Colorful</div>
        <div className={s.counter}>
          <AiOutlineMinus className={s.control} onClick={countHandleMinus} />
          <div className={s.number}>{count}</div>
          <AiOutlinePlus className={s.control} onClick={countHandlePlus} />
        </div>
        <div className={s.row}>{Array(count).fill(<ColorPicker />)}</div>
        <ThemeChanger changeTheme={changeTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
