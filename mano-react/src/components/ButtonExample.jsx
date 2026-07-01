function ButtonExample() {

  function handleClick() {
    console.log("Sveiki! Mygtukas buvo paspaustas.")
  }

  return (
    <>
      <h2>6 užduotis Mygtukas</h2>

      <button onClick={handleClick}>
        Paspausk mane
      </button>
    </>
  )
}

export default ButtonExample