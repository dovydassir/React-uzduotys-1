import { useState, useRef, useEffect } from "react";

function TypingSpeedTest() {

    const sakinys = "Klaipedos papludimys";
    const [tekstas, setTekstas] = useState("");
    const [laikas, setLaikas] = useState(0);
    const [vyksta, setVyksta] = useState(false);


    const inputRef = useRef(null);
    const startGame = () => {

    if (vyksta) return;

    setLaikas(0);
    setTekstas("");
    setVyksta(true);

    inputRef.current.focus();

};

const restartGame = () => {

    setTekstas("");
    setLaikas(0);
    setVyksta(false);

    inputRef.current.focus();

};



useEffect(() => {

    if (vyksta) {

        const interval = setInterval(() => {

            setLaikas((prev) => prev + 1);

        }, 1000);

        return () => clearInterval(interval);
    }

}, [vyksta]);

useEffect(() => {

    if (tekstas === sakinys) {
        setVyksta(false);
    }

}, [tekstas]);

 const greitis =
        laikas > 0
            ? (tekstas.length / laikas).toFixed(2)
            : 0;





    return (
        <>
    <h2>Typing Speed Test</h2>

    <p>{sakinys}</p>

    <textarea
    ref={inputRef}
    value={tekstas}
    onChange={(e) => setTekstas(e.target.value)}
    rows="5"
    cols="50"
    ></textarea>

    <button onClick={startGame}>Start</button>
    <button onClick={restartGame}>Restart</button>

    <p>Laikas: {laikas} s</p>

    <p>Greitis: {greitis} simbolių per sekundė</p>
    </>
    );

}

export default TypingSpeedTest