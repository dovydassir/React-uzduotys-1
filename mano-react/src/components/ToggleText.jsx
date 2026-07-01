import { useState } from "react"

function ToggleText() {

  const [show, setShow] = useState(false)

  return (
    <>
      <h2>9 užduotis  Rodyti / slėpti tekstą</h2>

      <button onClick={() => setShow(!show)}>
        {show ? "Slėpti tekstą" : "Rodyti tekstą"}
      </button>

      {show ? (
        <p>Sveiki! Čia yra paslėptas tekstas.</p>
      ) : null}

    </>
  )
}

export default ToggleText