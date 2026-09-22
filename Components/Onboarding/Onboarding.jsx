import IndicadorProgresso from "./IndicadorProgresso"
import EtapaObjetivo from "./Etapaobjetivo"
import EtapaMedidas from "./Etapamedidas"
import EtapaExperiencia from "./Etapaexperiencia"
import "./Onboarding.css"

import { useState } from "react"

function Onboarding({ usuario, setUsuarioLogado }) {
  const [etapa, setEtapa] = useState(1)
  const [dadosOnboarding, setDadosOnboarding] = useState({
    objetivo: "",
    peso: "",
    altura: "",
    idade: "",
    experiencia: ""
  })

  function finalizarOnboarding() {
    const usuarioAtualizado = {
      ...usuario,
      ...dadosOnboarding,
      onboardingCompleto: true
    }

    localStorage.setItem("user", JSON.stringify(usuarioAtualizado))
    setUsuarioLogado(usuarioAtualizado)
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