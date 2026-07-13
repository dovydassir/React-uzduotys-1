import { useRef } from "react";

function SelectText() {

    const inputRef = useRef(null);

    const pazymetiTeksta = () => {
        inputRef.current.select();
    };

    return (
        <>
            <h2>5 užduotis</h2>

            <input
                ref={inputRef}
                defaultValue="Sveiki, React!"
            />

            <button onClick={pazymetiTeksta}>
                Select Text
            </button>
        </>
    );
}

export default SelectText;