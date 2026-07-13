import { useRef } from "react";

function FocusButton() {

    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <h2>2 užduotis</h2>

            <input ref={inputRef} placeholder="Įveskite tekstą" />

            <button onClick={handleClick}>
                Fokusuoti
            </button>
        </>
    );
}

export default FocusButton;