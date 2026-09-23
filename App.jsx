import { useState } from "react"
import "../global.css"
import FormCadastro from './Components/Auth/FormCadastro'
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Onboarding from "./Components/Onboarding/Onboarding"

function App() {

  const [home, setHome] = useState(false)
  const [usuarioLogado, setUsuarioLogado] = useState(null)

  const [imc, setImc] = useState(0)

  return (
    <>
      {usuarioLogado && <Header />}

      {!usuarioLogado && <FormCadastro setUsuarioLogado={setUsuarioLogado} setHome={setHome}/>}

      {usuarioLogado &&
      !usuarioLogado.onboardingCompleto 
      && 
      <Onboarding 
      usuario={usuarioLogado} 
      setUsuarioLogado={setUsuarioLogado} 
      imc={imc}
      setImc={setImc}
      />}
      
      {usuarioLogado && usuarioLogado.onboardingCompleto && <Home user={usuarioLogado} imc={imc}/>}
    </>
  )
}

export default App
