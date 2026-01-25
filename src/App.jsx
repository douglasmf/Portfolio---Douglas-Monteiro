import { Global } from "./Global.style"
import { Header } from "./template/Header/Header"
import { Menu } from "./template/Menu/Menu"
import { MenuProvider } from "./context/MenuContext"
import { Main } from "./template/Main/Main"
import Routes from "./routes/Routes"
import { BrowserRouter } from "react-router-dom"
function App() {
  

  return (
    <>
      <Global />
      <BrowserRouter>
        <MenuProvider>
          <Header />
          <Menu />
          <Main>
            <Routes />
          </Main>
        </MenuProvider>
      </BrowserRouter>
    </>
  )
}

export default App
