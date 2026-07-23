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
import FirstUseEffect from "./useEffect"
import DocumentTitle from "./DocumentTitle"
import GreetingSecond from "./GreetingSecond"
import SimboliuSkaiciavimas from "./SimboliuSkaiciavimas"
import AmziausTikrinimas from "./AmziausTikrinimas"
import FonoSpalva from "./FonoSplava"
import AutoFocus from "./AutoFocus";
import FocusButton from "./FocusButton";
import InputValue from "./InputValue";
import ClearInput from "./ClearInput";
import SelectText from "./SelectText"
import ColorBox from "./ColorBox";
import ClickCounter from "./ClickCounter";
import TextLength from "./TextLength";
import DisableInput from "./DisableInput";
import ShowHideDiv from "./ShowHideDiv";
import TypingSpeedTest from "./TypingSpeedTest"
import Profile from "./Profile";
import FavoriteColor from "./FavoriteColor";
import LanguageSelector from "./LanguageSelector";
import ThemeSwitcher from "./ThemeSwitcher";
import LoginStatus from "./LoginStatus";
import ProfileInfo from "./ProfileInfo";
import MovieSelector from "./MovieSelector";
import CitySelector from "./CitySelector";
import { CourseContext } from "./CourseContext";
import { useContext } from "react";
import SavedThemeSwitcher from "./SavedThemeSwitcher";






function Main() {
const { course, setCourse } = useContext(CourseContext);

  return (
    <main
    style={{
        backgroundColor: "#a5d6a7",
        padding: "20px",
        marginBottom: "10px",
        minHeight: "400px"
    }}
>
      <p>Čia yra puslapio (MAIN) turinys.</p>
      
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

      <FirstUseEffect />

      <DocumentTitle />

      <GreetingSecond />

      <SimboliuSkaiciavimas />

      <AmziausTikrinimas />

      <FonoSpalva />
      <AutoFocus />
      <FocusButton />
      <InputValue />
      <ClearInput />
      <SelectText />
      <ColorBox />
      <ClickCounter />
      <TextLength />
      <DisableInput />
      <ShowHideDiv />
      <TypingSpeedTest />
      <Profile />

      <FavoriteColor />
      <LanguageSelector />
      <ThemeSwitcher />
      <LoginStatus />
      <ProfileInfo />
      <MovieSelector />
      <CitySelector />

      
      <h2>Kurso informacija</h2>

      <p>Kursas: {course.title}</p>

      <p>Dėstytojas: {course.teacher}</p>

      <button
    onClick={() =>
        setCourse({
            title: "JavaScript",
            teacher: "Petras"
        })
    }
>
    Pakeisti kursą
</button>

<SavedThemeSwitcher />

      

     


     
     
      
      


      


    </main>
  )
}

export default Main