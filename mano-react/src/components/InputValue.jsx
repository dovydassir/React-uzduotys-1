import { useRef } from "react";

function InputValue() {

    const inputRef = useRef(null);

    const rodytiTeksta = () => {
        alert(inputRef.current.value);
    };

    return (
        <>
            <h2>3 užduotis</h2>

            <input
                ref={inputRef}
                placeholder="Įveskite tekstą"
            />

            <button onClick={rodytiTeksta}>
                Rodyti tekstą
            </button>
        </>
    );
}

export default InputValue;