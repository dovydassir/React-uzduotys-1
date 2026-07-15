import { useRef } from "react";

function TextLength() {

    const inputRef = useRef(null);

    const parodytiIlgi = () => {
        alert("Simbolių skaičius: " + inputRef.current.value.length);
    };

    return (
        <>
            <h2>8 užduotis</h2>

            <input
                ref={inputRef}
                placeholder="Įveskite tekstą"
            />

            <button onClick={parodytiIlgi}>
                Skaičiuoti
            </button>
        </>
    );
}

export default TextLength;