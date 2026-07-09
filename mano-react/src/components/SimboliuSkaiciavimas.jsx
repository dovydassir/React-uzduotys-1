import { useState, useEffect } from 'react';


function SimboliuSkaiciavimas() {
    const [text, setText] = useState("");
    useEffect(() => {
  console.log(`Įvesta simbolių: ${text.length}`);
}, [text]);
    return (
        <div>
            <h2>4 užduotis</h2>
            <input
                type="text"
                placeholder="Iveskite teksta"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <p>
                Ivesta simboliu: {text.length}
            </p>
        </div>
    );
}

export default SimboliuSkaiciavimas
