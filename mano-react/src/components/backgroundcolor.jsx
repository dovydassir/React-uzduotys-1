import { useState } from "react"

function BackgroundColor() {

    const [color, setColor] = useState("white")

    return (
        <>
        <h2>fono spalvos keitimas</h2>
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("blue")}>Blue</button>
        <div style={{background: color, height: "100px"}}></div>
        </>
    )
}

export default BackgroundColor



