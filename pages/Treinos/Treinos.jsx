import { useLocation } from "react-router-dom"
import { useState } from "react"
import FormTreino from "./FormTreino"

function Treinos() {
    const location = useLocation()
    const [criarTreino, setCriarTreino] = useState(location.state?.abrirFormulario || false)

  return (
    <div className="treinos-container">
      {criarTreino ? (
        <div>
          <h1>Novo treino</h1>
          <FormTreino />
        </div>
      ) : (
        <div>
          <h1>Treinos</h1>
          <p>Nenhum treino cadastrado ainda</p>
          <button onClick={() => setCriarTreino(true)}>Criar treino</button>
        </div>
      )}
    </div>
  )
}

export default Treinos