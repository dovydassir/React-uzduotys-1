import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeSwitcher() {

    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            <h2>Tema</h2>

            <p>Dabartinė tema: {theme}</p>

            <button onClick={() => setTheme("light")}>
                Light
            </button>

            <button onClick={() => setTheme("dark")}>
                Dark
            </button>
        </div>
    );
}

export default ThemeSwitcher;
