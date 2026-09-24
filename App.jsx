import { useState, useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import "../global.css"
import FormCadastro from './Components/Auth/FormCadastro'
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Onboarding from "./Components/Onboarding/Onboarding"
import { ImcProvider } from "./Components/ImcContext"
import Treinos from "./pages/Treinos/Treinos.jsx"

function App() {

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
      {usuarioLogado && <Header setUsuarioLogado={setUsuarioLogado} usuario={usuarioLogado} />}

      <Routes>
        <Route 
          path="/cadastro" 
          element={<FormCadastro setUsuarioLogado={setUsuarioLogado} />} 
        />

        <Route 
          path="/onboarding" 
          element={
            usuarioLogado 
              ? <Onboarding usuario={usuarioLogado} setUsuarioLogado={setUsuarioLogado} />
              : <Navigate to="/cadastro" />
          } 
        />

        <Route 
          path="/home" 
          element={
            usuarioLogado?.onboardingCompleto 
              ? <Home user={usuarioLogado} />
              : <Navigate to="/cadastro" />
          } 
        />

        <Route path="*" element={<Navigate to="/cadastro" />} />

        <Route 
          path="/treinos" 
          element={
            usuarioLogado?.onboardingCompleto 
              ? <Treinos />
              : <Navigate to="/cadastro" />
          } 
        />
      </Routes>
    </ImcProvider>
  )
}

export default App
