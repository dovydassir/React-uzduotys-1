import { useRef } from "react";

function ClickCounter() {

    const countRef = useRef(0);

    const skaiciuotiPaspaudimus = () => {
        countRef.current++;
        alert("Mygtukas paspaustas " + countRef.current + " kartų");
    };

    return (
        <>
            <h2>7 užduotis</h2>

            <button onClick={skaiciuotiPaspaudimus}>
                Spausk mane
            </button>
        </>
    );
}

export default ClickCounter;