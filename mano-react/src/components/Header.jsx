import { useContext } from "react";
import { CityContext } from "./CityContext";
import { CourseContext } from "./CourseContext";




function Header() {

  const { city } = useContext(CityContext);
  const { course } = useContext(CourseContext);
  return (
    <header
    style={{
        backgroundColor: "#90caf9",
        padding: "20px",
        marginBottom: "10px"
    }}
>
      <h1>Mano pirmasis React puslapis (header)</h1>

      <p>Miestas: {city}</p>
      <p>Kursas: {course.title}</p>
    </header>
  )
}

export default Header