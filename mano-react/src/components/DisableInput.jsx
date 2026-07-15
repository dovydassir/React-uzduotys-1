import { useRef } from "react";

function DisableInput() {

    const inputRef = useRef(null);

    const isjungtiInput = () => {
        inputRef.current.disabled = true;
    };

    return (
        <>
            <h2>9 užduotis</h2>

            <input
                ref={inputRef}
                placeholder="Įveskite tekstą"
            />

            <button onClick={isjungtiInput}>
                Disable
            </button>
        </>
    );
}

export default DisableInput;