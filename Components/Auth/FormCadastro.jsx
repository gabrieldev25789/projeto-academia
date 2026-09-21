import { useState } from "react"
import "./FormCadastro.css"

function FormCadastro() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")

function cadastrarUser(){

    if(!nome || !email || !senha) {
        alert("Digite valores")
        return 
    }

    if(senha !== confirmarSenha) {
        alert("Senha diferente")
        return 
    }

    const user = {
        nome: nome,
        email: email, 
        senha: senha 
    }
    
    console.log(user)
    setNome("")
    setEmail("")
    setSenha("")
    setConfirmarSenha("")
}

  return (
    <div className="cadastro-container">
      <div className="form-cadastro">
        <h2>Criar conta</h2>

        <div className="campo">
          <label htmlFor="nome">Nome</label>
          <input 
            type="text" 
            id="nome" 
            name="nome" 
            value={nome}
            onChange={(e)=> setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </div>

        <div className="campo">
          <label htmlFor="email">E-mail</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
        </div>

        <div className="campo">
          <label htmlFor="senha">Senha</label>
          <input 
            type="password" 
            id="senha" 
            name="senha" 
            value={senha}
            onChange={(e)=>setSenha(e.target.value)}
            placeholder="Crie uma senha"
          />
        </div>

        <div className="campo">
          <label htmlFor="confirmarSenha">Confirmar senha</label>
          <input 
            type="password" 
            id="confirmarSenha" 
            name="confirmarSenha" 
            value={confirmarSenha}
            onChange={(e)=>setConfirmarSenha(e.target.value)}
            placeholder="Repita a senha"
          />
        </div>

        <button onClick={() => cadastrarUser()} className="botao-cadastrar">
          Cadastrar
        </button>

        <p className="link-login">
          Já tem uma conta? <a href="#">Entrar</a>
        </p>
      </div>
    </div>
  )
}

export default FormCadastro