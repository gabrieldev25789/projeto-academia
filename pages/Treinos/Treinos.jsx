import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import FormTreino from "../../Components/Treinos/FormTreino"
import ListaTreinos from "../../Components/Treinos/ListaTreinos"
import "./Treinos.css"

function Treinos() {
  const location = useLocation()
  const [criarTreino, setCriarTreino] = useState(location.state?.abrirFormulario || false)
  const [treinos, setTreinos] = useState([])

  function carregarTreinos() {
    const emailUsuario = localStorage.getItem("sessaoAtual")
    const chave = `treinos_${emailUsuario}`
    const treinosSalvos = JSON.parse(localStorage.getItem(chave)) || []
    setTreinos(treinosSalvos)
  }

  useEffect(() => {
    carregarTreinos()
  }, [])

  function fecharForm() {
    setCriarTreino(false)
    carregarTreinos()
  }

  return (
    <div className="treinos-container">
      {criarTreino ? (
        <FormTreino onVoltar={fecharForm} />
      ) : treinos.length === 0 ? (
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
      ) : (
        <div className="treinos-lista-wrapper">
          <div className="treinos-cabecalho">
            <h1>Treinos</h1>
            <button type="button" className="botao-cta" onClick={() => setCriarTreino(true)}>
              + Novo treino
            </button>
          </div>
          <ListaTreinos treinos={treinos} />
        </div>
      )}
    </div>
  )
}

export default Treinos