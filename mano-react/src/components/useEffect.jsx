import {useEffect} from "react";

function FirstUseEffect() {
    useEffect(() => {
        console.log("Komponentas užkrautas");
    }, []);
    return (
        <div>
            <h1>useEffect 1 uzduotis</h1>
        </div>
    );
}

export default FirstUseEffect