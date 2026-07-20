import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import UserProvider from "./components/UserContext";
import ColorProvider from "./components/ColorContext";



function App() {
  return (
    <>
    <ColorProvider>
    <UserProvider>
      <Header />
      <Main />
      <Footer />
    </UserProvider>
    </ColorProvider>
    </>
  )
}

export default App