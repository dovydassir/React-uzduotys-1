import { useContext } from "react";
import { CityContext } from "./CityContext";

function Footer() {
  const { city } = useContext(CityContext);
  return (
    <footer
    style={{
        backgroundColor: "#ffcc80",
        padding: "20px"
    }}
>
      <p>Miestas: {city}</p>
      <p>© 2026 Dovydas (Footer)</p>
    </footer>
  )
}

export default Footer