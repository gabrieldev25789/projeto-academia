import IndicadorProgresso from "./IndicadorProgresso"
import EtapaObjetivo from "./Etapaobjetivo"
import EtapaMedidas from "./Etapamedidas"
import EtapaExperiencia from "./Etapaexperiencia"
import "./Onboarding.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Onboarding({ usuario, setUsuarioLogado }) {
  const navigate = useNavigate()

  const [etapa, setEtapa] = useState(1)
  const [dadosOnboarding, setDadosOnboarding] = useState({
    objetivo: "",
    peso: "",
    altura: "",
    idade: "",
    experiencia: ""
  })

  function finalizarOnboarding() {
    const altura = Number(dadosOnboarding.altura) / 100
    const peso = Number(dadosOnboarding.peso)
    const imcCalculado = peso / (altura ** 2)

    const usuarioAtualizado = {
      ...usuario,
      ...dadosOnboarding,
      imc: imcCalculado,
      onboardingCompleto: true
    }

    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || []

    const usuariosAtualizados = usuariosSalvos.map(u => 
      u.email === usuarioAtualizado.email ? usuarioAtualizado : u
    )

    localStorage.setItem("usuarios", JSON.stringify(usuariosAtualizados))
    setUsuarioLogado(usuarioAtualizado)
    navigate("/home")
  }

  return (
    <div className="onboarding-container">
      <IndicadorProgresso etapaAtual={etapa} totalEtapas={3} />

      {etapa === 1 && <EtapaObjetivo dados={dadosOnboarding} setDados={setDadosOnboarding} onProximo={() => setEtapa(2)} />}

      {etapa === 2 && <EtapaMedidas dados={dadosOnboarding} setDados={setDadosOnboarding} onProximo={() => setEtapa(3)} onVoltar={() => setEtapa(1)} />}

      {etapa === 3 && <EtapaExperiencia dados={dadosOnboarding} setDados={setDadosOnboarding} onFinalizar={finalizarOnboarding} onVoltar={() => setEtapa(2)} />}
    </div>
  )
}

export default Onboarding