import "./Home.css"

function Home({ user }) {

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
          <span className="metrica-extra">Classificação</span>
        </div>

        <div className="metrica-card">
          <span className="metrica-label">Peso atual</span>
          <span className="metrica-valor"> {user?.peso} kg</span>
        </div>
      </div>

      {/* O que fazer agora */}
      <div className="proximo-passo">
        <h2>Treino de hoje</h2>
        <div className="card-placeholder">
          <p>Você ainda não tem treinos cadastrados</p>
          <button type="button" className="botao-cta">Criar meu primeiro treino</button>
        </div>
      </div>

      {/* Atalhos rápidos */}
      <div className="atalhos-grid">
        <div className="atalho-card">
          <span className="atalho-icone">🏋️</span>
          <span className="atalho-label">Treinos</span>
        </div>

        <div className="atalho-card">
          <span className="atalho-icone">🥗</span>
          <span className="atalho-label">Dietas</span>
        </div>

        <div className="atalho-card">
          <span className="atalho-icone">📊</span>
          <span className="atalho-label">Desempenho</span>
        </div>
      </div>

    </div>
  )
}

export default Home