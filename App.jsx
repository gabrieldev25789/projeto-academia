import { useState } from "react"
import "../global.css"
import FormCadastro from './Components/Auth/FormCadastro'
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"

function App() {

  const [home, setHome] = useState(false)
  const [usuarioLogado, setUsuarioLogado] = useState(null)

  return (
    <>
      {home && <Header />}
      {!home && <FormCadastro setHome={setHome} setUsuarioLogado={setUsuarioLogado} />}
      {home && <Home user={usuarioLogado} />}
    </>
  )
}

export default App
