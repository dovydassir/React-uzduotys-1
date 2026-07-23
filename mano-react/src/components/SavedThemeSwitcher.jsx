import { useContext } from "react";
import { SavedThemeContext } from "./SavedThemeContext";

function SavedThemeSwitcher() {

    const { theme, setTheme } = useContext(SavedThemeContext);

    return (
        <div>
            <h2>Išsaugoma tema</h2>

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

export default SavedThemeSwitcher;