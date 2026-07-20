import { useContext } from "react";
import { ColorContext } from "./ColorContext";

function FavoriteColor() {

    const { color, setColor } = useContext(ColorContext);

    return (
        <div>
            <h2>Mėgstama spalva</h2>

            <p>{color}</p>

            <button onClick={() => setColor("Raudona")}>Raudona</button>
            <button onClick={() => setColor("Žalia")}>Žalia</button>
            <button onClick={() => setColor("Mėlyna")}>Mėlyna</button>
        </div>
    );
}

export default FavoriteColor;