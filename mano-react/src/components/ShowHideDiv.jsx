import { useRef } from "react";

function ShowHideDiv() {

    const divRef = useRef(null);

    const paslepti = () => {
        divRef.current.style.display = "none";
    };

    const parodyti = () => {
        divRef.current.style.display = "block";
    };

    return (
        <>
            <h2>10 užduotis</h2>

            <div
                ref={divRef}
                style={{
                    width: "200px",
                    height: "100px",
                    backgroundColor: "lightblue",
                    marginBottom: "10px"
                }}
            >
                Mano DIV
            </div>

            <button onClick={paslepti}>
                Paslėpti
            </button>

            <button onClick={parodyti}>
                Parodyti
            </button>
        </>
    );
}

export default ShowHideDiv;