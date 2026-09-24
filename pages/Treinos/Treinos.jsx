import { useLocation } from "react-router-dom"
import { useState } from "react"
import FormTreino from "../../Components/Treinos/FormTreino"
import "./Treinos.css"

function Treinos() {
  const location = useLocation()
  const [criarTreino, setCriarTreino] = useState(location.state?.abrirFormulario || false)

  return (
    <div className="treinos-container">
      {criarTreino ? (
        <FormTreino onVoltar={() => setCriarTreino(false)} />
      ) : (
        <div className="treinos-vazio">
          <h1>Treinos</h1>
          <div className="card-placeholder-treinos">
            <p>Nenhum treino cadastrado ainda</p>
            <button 
              type="button" 
              className="botao-cta" 
              onClick={() => setCriarTreino(true)}
            >
              Criar treino
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Treinos