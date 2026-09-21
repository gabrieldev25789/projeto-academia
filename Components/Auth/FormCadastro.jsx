import "./FormCadastro.css"

function FormCadastro() {
  return (
    <div className="cadastro-container">
      <form className="form-cadastro">
        <h2>Criar conta</h2>

        <div className="campo">
          <label htmlFor="nome">Nome</label>
          <input 
            type="text" 
            id="nome" 
            name="nome" 
            placeholder="Digite seu nome"
          />
        </div>

        <div className="campo">
          <label htmlFor="email">E-mail</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Digite seu e-mail"
          />
        </div>

        <div className="campo">
          <label htmlFor="senha">Senha</label>
          <input 
            type="password" 
            id="senha" 
            name="senha" 
            placeholder="Crie uma senha"
          />
        </div>

        <div className="campo">
          <label htmlFor="confirmarSenha">Confirmar senha</label>
          <input 
            type="password" 
            id="confirmarSenha" 
            name="confirmarSenha" 
            placeholder="Repita a senha"
          />
        </div>

        <button type="submit" className="botao-cadastrar">
          Cadastrar
        </button>

        <p className="link-login">
          Já tem uma conta? <a href="#">Entrar</a>
        </p>
      </form>
    </div>
  )
}

export default FormCadastro