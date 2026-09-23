import { Link, useNavigate } from "react-router-dom"
import "./Header.css"

function Header({ setUsuarioLogado, usuario }) {

  const navigate = useNavigate()

  function fazerLogout() {
    localStorage.removeItem("sessaoAtual")
    setUsuarioLogado(null)
    navigate("/cadastro")
  }

  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-texto">FORGE<span className="logo-destaque">FIT</span></span>
      </div>

      <nav className="header-nav">
        <Link to="/home" className="nav-link">Início</Link>
        <Link to="/treinos" className="nav-link">Treinos</Link>
        <Link to="/dietas" className="nav-link">Dietas</Link>
        <Link to="/desempenho" className="nav-link">Desempenho</Link>
      </nav>

      <div className="header-usuario">
        <span className="usuario-nome">Olá, {usuario?.nome}</span>
        <div className="usuario-avatar"></div>
        <button onClick={() => fazerLogout()} className="botao-logout">SAIR</button>
      </div>
    </header>
  )
}

export default Header