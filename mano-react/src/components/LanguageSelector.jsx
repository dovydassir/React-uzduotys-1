import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function LanguageSelector() {

    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <div>
            <h2>Kalbos pasirinkimas</h2>

            <p>Dabartinė kalba: {language}</p>

            <button onClick={() => setLanguage("Lietuvių")}>
                Lietuvių
            </button>

            <button onClick={() => setLanguage("English")}>
                English
            </button>

            <button onClick={() => setLanguage("Deutsch")}>
                Deutsch
            </button>
        </div>
    );
}

export default LanguageSelector;