import {useState, useEffect} from "react";

function GreetingSecond () {

    const [name, setname] = useState("");

    useEffect(() => {
        console.log(`Sveikas, ${name}!`);
    }, [name]);

    return (
        <div>
            <h2>3 užduotis</h2>

            <input
                type="text"
                placeholder="Įveskite savo vardą"
                value={name}
                onChange={(event) => setname(event.target.value)}
            />
        </div>
    );
}

export default GreetingSecond