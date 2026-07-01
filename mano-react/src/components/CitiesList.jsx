function CitiesList() {

  const cities = [
    "Vilnius",
    "Kaunas",
    "Klaipėda",
    "Šiauliai",
    "Panevėžys"
  ]

  return (
    <>
      <h2>Miestai</h2>

      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </>
  )
}

export default CitiesList