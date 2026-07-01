import { useState } from "react"

function InputExample() {

  const [name, setName] = useState("")

  return (
    <>
      <h2>8 užduotis Input</h2>

      <input
        type="text"
        placeholder="Įveskite savo vardą"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <p>
            {name ? `Sveikas, ${name}!` : "Įveskite vardą."}
        </p>

    </>
  )
}

export default InputExample