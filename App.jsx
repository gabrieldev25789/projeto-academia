import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import "../global.css"
import FormCadastro from './Components/Auth/FormCadastro'
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Onboarding from "./Components/Onboarding/Onboarding"
import { ImcProvider } from "./Components/ImcContext"
import Treinos from "./pages/Treinos/Treinos"

function App() {

  const [usuarioLogado, setUsuarioLogado] = useState(null)

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
