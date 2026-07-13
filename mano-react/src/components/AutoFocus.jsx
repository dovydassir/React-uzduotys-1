import { useRef, useEffect } from "react";

function AutoFocus() {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <>
            <h2>1 užduotis AutoFocus</h2>

            <input ref={inputRef} placeholder="Įveskite tekstą" />
        </>
    );
}

export default AutoFocus;