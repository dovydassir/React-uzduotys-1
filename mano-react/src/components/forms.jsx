function MyForm() {
  return (
    <form>
      <label>Vardas:
        <input type="text" />
      </label>
      <label>Pavarde:
        <input type="text" />
      </label>
      <label>Amžius:
        <input type="number" />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default MyForm