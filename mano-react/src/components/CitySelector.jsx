import { useContext } from "react";
import { CityContext } from "./CityContext";

function CitySelector() {

    const { city, setCity } = useContext(CityContext);

    return (
        <div>
            <h2>Pasirink miestą</h2>

            <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
            >
                <option>Kaunas</option>
                <option>Vilnius</option>
                <option>Klaipėda</option>
                <option>Šiauliai</option>
            </select>

            <p>Pasirinktas miestas Main: {city}</p>
        </div>
    );
}

export default CitySelector;