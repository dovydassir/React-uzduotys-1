import { useState, useEffect } from 'react';

const AmziausTikrinimas = () => {

    const [age, setAge] = useState("");
    const [status, setStatus] = useState("");

   useEffect(() => {
    if (age === "") {
        setStatus("");
        return;
    }

    if (Number(age) < 18) {
        setStatus("Nepilnametis");
    } else {
        setStatus("Pilnametis");
    }
}, [age]);

    return (
        <div>
            <h2>5 užduotis</h2>
            <input
                type="number"
                placeholder="Iveskite amžiu"
                value={age}
                onChange={(event) => setAge(event.target.value)}
            />

            <p>
                jūs esate: {status}
            </p>
        </div>
    );
}

export default AmziausTikrinimas