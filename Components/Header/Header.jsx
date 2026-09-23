import "./Header.css"

function Header({setUsuarioLogado}) {

  function fazerLogout() {
  localStorage.removeItem("sessaoAtual")
  setUsuarioLogado(null)
}

  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-texto">FORGE<span className="logo-destaque">FIT</span></span>
      </div>

      <nav className="header-nav">
        <a href="#" className="nav-link nav-link-ativo">Início</a>
        <a href="#" className="nav-link">Treinos</a>
        <a href="#" className="nav-link">Dietas</a>
        <a href="#" className="nav-link">Desempenho</a>
      </nav>

      <div className="header-usuario">
        <span className="usuario-nome">Olá, Grizzy</span>
        <div className="usuario-avatar"></div>
        <button onClick={() => fazerLogout()}>SAIR</button>
      </div>
    </header>
  )
}

export default Header