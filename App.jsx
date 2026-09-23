import { useState, useEffect } from "react"
import "../global.css"
import FormCadastro from './Components/Auth/FormCadastro'
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Onboarding from "./Components/Onboarding/Onboarding"
import { ImcProvider } from "./Components/ImcContext"

function App() {

  const [home, setHome] = useState(false)
  const [usuarioLogado, setUsuarioLogado] = useState(null)


  useEffect(() => {
    const emailSessao = localStorage.getItem("sessaoAtual")

    if (emailSessao) {
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
      const usuarioEncontrado = usuarios.find(u => u.email === emailSessao)

      if (usuarioEncontrado) {
        setUsuarioLogado(usuarioEncontrado)
      }
    }
  }, [])

  return (
    <ImcProvider>
      {usuarioLogado && <Header setUsuarioLogado={setUsuarioLogado}/>}

      {!usuarioLogado && <FormCadastro setUsuarioLogado={setUsuarioLogado} setHome={setHome}/>}

      {usuarioLogado &&
      !usuarioLogado.onboardingCompleto 
      && 
      <Onboarding 
      usuario={usuarioLogado} 
      setUsuarioLogado={setUsuarioLogado} 
      />}
      
      {usuarioLogado && usuarioLogado.onboardingCompleto && <Home user={usuarioLogado}/>}
    </ImcProvider>
  )
}

export default App
