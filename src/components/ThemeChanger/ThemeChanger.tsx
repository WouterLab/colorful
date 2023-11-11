import { useContext } from "react";
import s from "./ThemeChanger.module.scss";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../App";

function ThemeChanger({ changeTheme }: { changeTheme: () => void }) {
  const theme = useContext(ThemeContext);

  const buttonStyles = theme === "dark" ? s.buttonDark : s.buttonLight;
  const iconStyles = theme === "dark" ? s.iconDark : s.iconLight;

  return (
    <div className={`${s.button} ${buttonStyles}`} onClick={changeTheme}>
      <FaMoon size={28} className={iconStyles} />
    </div>
  );
}

export { ThemeChanger };
