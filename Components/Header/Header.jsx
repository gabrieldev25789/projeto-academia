import "./Header.css"

function Header() {
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
      </div>
    </header>
  )
}

export default Header