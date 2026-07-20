import { createContext, useState } from "react";
export const ColorContext = createContext();


function ColorProvider({ children }) {

    const [color, setColor] = useState("Raudona");

    return (
        <ColorContext.Provider value={{ color, setColor }}>
            {children}
        </ColorContext.Provider>
    );
}

export default ColorProvider;