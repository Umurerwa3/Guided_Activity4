import { useTheme } from "../context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "../constants/theme";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === LIGHT_THEME;

  return (
    <nav className={`${styles.navbar} ${isLight ? styles.light : styles.dark}`}>
      <span className={styles.brand}>React App</span>
      <button className={styles.toggleButton} onClick={toggleTheme}>
        Switch to {isLight ? DARK_THEME : LIGHT_THEME} Mode
      </button>
    </nav>
  );
};

export default Navbar;
