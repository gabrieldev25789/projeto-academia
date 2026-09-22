import "./Home.css"

function Home({ user }) {

    const altura = Number(user.altura) / 100
    const peso = Number(user.peso)

    const imc = peso / (altura ** 2)

    console.log(imc.toFixed(2))

  return (
    <div className="home-container">
      <h1>Olá, {user?.nome}!</h1>
      <p>Seu IMC é de {imc.toFixed(2)}</p>

      <div className="perfil-resumo">
        <div className="perfil-item">
          <span className="perfil-label">Idade</span>
          <span className="perfil-valor">{user?.idade} anos</span>
        </div>

        <div className="perfil-item">
          <span className="perfil-label">Peso</span>
          <span className="perfil-valor">{user?.peso} kg</span>
        </div>

        <div className="perfil-item">
          <span className="perfil-label">Objetivo</span>
          <span className="perfil-valor">{user?.objetivo}</span>
        </div>

        <div className="perfil-item">
          <span className="perfil-label">Experiência</span>
          <span className="perfil-valor">{user?.experiencia}</span>
        </div>
      </div>
    </div>
  )
}

export default Home