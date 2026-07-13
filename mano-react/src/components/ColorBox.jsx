import { useRef } from "react";

function ColorBox() {

    const boxRef = useRef(null);

    const keistiSpalva = () => {
        boxRef.current.style.backgroundColor = "red";
    };

    return (
        <>
            <h2>6 užduotis</h2>

            <div
                ref={boxRef}
                style={{
                    width: "200px",
                    height: "100px",
                    backgroundColor: "lightgray",
                    marginBottom: "10px"
                }}
            >
            </div>

            <button onClick={keistiSpalva}>
                Keisti spalvą
            </button>
        </>
    );
}

export default ColorBox;