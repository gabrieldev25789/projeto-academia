import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Dietas.css"
import FormDieta from "../../Components/Dietas/FormDieta"
import ListaDieta from "./ListaDieta"

function Dietas() {
  const location = useLocation()
  const [criarDieta, setCriarDieta] = useState(location.state?.abrirFormulario || false)
  const [dietas, setDietas] = useState([])

  function carregarDietas() {
    const emailUsuario = localStorage.getItem("sessaoAtual")
    const chave = `dietas_${emailUsuario}`
    const dietasSalvas = JSON.parse(localStorage.getItem(chave)) || []
    setDietas(dietasSalvas)
  }

  useEffect(() => {
    carregarDietas()
  }, [])

  function fecharForm() {
    setCriarDieta(false)
    carregarDietas()
  }

  return (
    <div className="dietas-container">
      {criarDieta ? (
        <FormDieta onVoltar={fecharForm} />
      ) : dietas.length === 0 ? (
        <div className="dietas-vazio">
          <h1>Dietas</h1>
          <div className="card-placeholder-dietas">
            <p>Nenhuma refeição cadastrada ainda</p>
            <button
              type="button"
              className="botao-cta"
              onClick={() => setCriarDieta(true)}
            >
              Criar refeição
            </button>
          </div>
        </div>
      ) : (
        <div className="dietas-lista-wrapper">
          <div className="dietas-cabecalho">
            <button type="button" className="botao-cta" onClick={() => setCriarDieta(true)}>
              + Nova refeição
            </button>
          </div>
          <ListaDieta dietas={dietas} />
        </div>
      )}
    </div>
  )
}

export default Dietas