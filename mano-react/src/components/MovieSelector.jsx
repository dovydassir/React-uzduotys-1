import { useContext } from "react";
import { MovieContext } from "./MovieContext";

function MovieSelector() {

    const { movie, setMovie } = useContext(MovieContext);

    return (
        <div>
            <h2>Mėgstamiausias filmas</h2>

            <select
                value={movie}
                onChange={(e) => setMovie(e.target.value)}
            >
                <option>Titanic</option>
                <option>Avatar</option>
                <option>Interstellar</option>
                <option>Joker</option>
            </select>

            <p>Pasirinktas filmas: {movie}</p>
        </div>
    );
}

export default MovieSelector;