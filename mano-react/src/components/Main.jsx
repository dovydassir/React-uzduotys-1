import StudentCard from "./StudentCard"
import CitiesList from "./CitiesList"
import ButtonExample from "./ButtonExample"
import Counter from "./Counter"
import InputExample from "./InputExample"
import ToggleText from "./ToggleText"
import ProductCard from "./ProductCard"
import FormExample from "./FormExample"
import MyForm from "./forms"
import StudentList from "./StudentList"
import BackgroundColor from "./backgroundcolor"
import LikeButton from "./LikeButton"




function Main() {
  return (
    <main>
      <p>Čia yra puslapio turinys.</p>
      
      <StudentCard
        name="Dovydas"
        age={29}
        city="Kaunas"
      />

      <CitiesList />

      <ButtonExample />

       <Counter />

       <InputExample />

       <ToggleText />

       <ProductCard
        name="lenovo ideapad"
        price={1199}
        brand="lenovo"
      />

      <FormExample />
      <MyForm />

      <StudentList />
      <BackgroundColor />
      <LikeButton />
      


    </main>
  )
}

export default Main