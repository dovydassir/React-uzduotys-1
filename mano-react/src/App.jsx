import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import UserProvider from "./components/UserContext";
import ColorProvider from "./components/ColorContext";
import LanguageProvider from "./components/LanguageContext";
import ThemeProvider from "./components/ThemeContext";
import LoginProvider from "./components/LoginContext";
import ProfileProvider from "./components/ProfileContext";
import MovieProvider from "./components/MovieContext";
import CityProvider from "./components/CityContext";
import CourseProvider from "./components/CourseContext";
import SavedThemeProvider from "./components/SavedThemeContext";


function App() {
  return (
    <>
<SavedThemeProvider>
<CourseProvider>
   <CityProvider>
    <MovieProvider>
      <ProfileProvider>
         <LoginProvider>
             <ThemeProvider>
                 <LanguageProvider>
                     <ColorProvider>
                          <UserProvider>
                            <Header />
                            <Main />
                            <Footer />
                        </UserProvider>
                    </ColorProvider>
                </LanguageProvider>
            </ThemeProvider>
        </LoginProvider>
     </ProfileProvider>
   </MovieProvider>
  </CityProvider>
</CourseProvider>
</SavedThemeProvider>
    </>
  )
}

export default App