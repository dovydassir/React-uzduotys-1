import { useState } from "react"

function FormExample() {

const [name, setName] = useState("")

  return (
    <>
      <h2>11 užduotis  Forma</h2>

      <label>Vardas:</label>
      <br />
      <input
     
      type="text"
      value={name}
      onChange={(event) => setName(event.target.value)}
      />
      <p>Tu įvedei: {name}</p>
    </>
  )
}

export default FormExample
