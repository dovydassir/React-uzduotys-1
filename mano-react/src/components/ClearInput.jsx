import { useRef } from "react";

function ClearInput() {

    const inputRef = useRef(null);

    const isvalytiLaukeli = () => {
        inputRef.current.value = "";
    };

    return (
        <>
            <h2>4 užduotis</h2>

            <input
                ref={inputRef}
                placeholder="Įveskite tekstą"
            />

            <button onClick={isvalytiLaukeli}>
                Išvalyti
            </button>
        </>
    );
}

export default ClearInput;