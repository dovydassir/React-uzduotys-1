import { createContext, useState, useEffect } from "react";

export const SavedThemeContext = createContext();

function SavedThemeProvider({ children }) {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <SavedThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </SavedThemeContext.Provider>
    );
}

export default SavedThemeProvider;