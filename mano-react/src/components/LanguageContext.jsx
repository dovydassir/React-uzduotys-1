import { createContext, useState } from "react";

export const LanguageContext = createContext();

function LanguageProvider({ children }) {

    const [language, setLanguage] = useState("Lietuvių");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageProvider;
