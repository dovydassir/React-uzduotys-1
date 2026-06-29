
import StudentCard from "./StudentCard"
function Main() {
  return (
    <main>
      <p>Čia yra puslapio turinys.</p>
      
      <StudentCard
        name="Dovydas"
        age={29}
        city="Kaunas"
      />


    </main>
  )
}

export default Main