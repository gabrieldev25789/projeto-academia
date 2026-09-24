import "./Home.css"
import { Link } from "react-router-dom"

const TABELA_IMC = [
  { min: 0,    max: 18.5, classificacao: "abaixo_do_peso",  label: "Abaixo do peso", cor: "amarelo" },
  { min: 18.5, max: 25,   classificacao: "peso_normal",     label: "Peso normal",    cor: "verde" },
  { min: 25,   max: 30,   classificacao: "sobrepeso",       label: "Sobrepeso",      cor: "amarelo" },
  { min: 30,   max: 40,   classificacao: "obesidade",       label: "Obesidade",      cor: "vermelho" },
  { min: 40,   max: 80,   classificacao: "obesidade_grave", label: "Obesidade grave", cor: "vermelho" }
]

function Home({ user }) {

  function classificarImc(imc) {
    return TABELA_IMC.find(faixa => imc >= faixa.min && imc < faixa.max)
  }

  const emailUsuario = localStorage.getItem("sessaoAtual")
  const chave = `treinos_${emailUsuario}`
  const treinosSalvos = JSON.parse(localStorage.getItem(chave)) || []

  const imc = Number(user?.imc)
  const resultado = classificarImc(imc)
  const temTreinos = treinosSalvos.length > 0

  return (
    <div className="home-container">

      {/* Cabeçalho pessoal */}
      <div className="home-cabecalho">
        <h1>Olá, {user?.nome}!</h1>
        <p className="home-resumo">Foco em {user?.objetivo} · {user?.experiencia}</p>
      </div>

      {/* Cards de métricas rápidas */}
      <div className="metricas-grid">
        <div className="metrica-card">
          <span className="metrica-label">IMC</span>
          <span className="metrica-valor">{user?.imc?.toFixed(2)}</span>
          <span className={`badge-imc badge-${resultado?.cor}`}>{resultado?.label}</span>
        </div>

        <div className="metrica-card">
          <span className="metrica-label">Peso atual</span>
          <span className="metrica-valor"> {user?.peso} kg</span>
        </div>
      </div>

      {/* O que fazer agora */}
      <div className="proximo-passo">
        <h2>Treino de hoje</h2>
        {!temTreinos ? (
          <div className="card-placeholder">
            <p>Você ainda não tem treinos cadastrados</p>
            <Link to="/treinos" state={{ abrirFormulario: true }} className="botao-cta">
              Criar meu primeiro treino
            </Link>
          </div>
        ) : (
          <div className="card-placeholder">
            <p>Você já tem {treinosSalvos.length} treino(s) cadastrado(s)</p>
            <Link to="/treinos" state={{ abrirFormulario: true }} className="botao-cta">
              Criar mais treinos
            </Link>
          </div>
        )}
      </div>

      {/* Atalhos rápidos */}
      <div className="atalhos-grid">
        <Link to="/treinos" className="atalho-card">
          <span className="atalho-icone">🏋️</span>
          <span className="atalho-label">Treinos</span>
        </Link>

        <Link to="/dietas" className="atalho-card">
          <span className="atalho-icone">🥗</span>
          <span className="atalho-label">Dietas</span>
        </Link>

        <Link to="/desempenho" className="atalho-card">
          <span className="atalho-icone">📊</span>
          <span className="atalho-label">Desempenho</span>
        </Link>
      </div>

    </div>
  )
}

export default Home