import { useState } from "react"
import "./FormCadastro.css"
import Gerador from "../Gerador/Gerador"

function FormCadastro({ setHome, setUsuarioLogado }) {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")
    const [emailLogin, setEmailLogin] = useState("")
    const [senhaLogin, setSenhaLogin] = useState("")

    const [entrar, setEntrar] = useState(false)

    const [userCriado, setUserCriado] = useState({})

    const [mostrarSenha, setMostrarSenha] = useState(false)

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

    setUserCriado(user) // atualiza o state pra uso futuro (ex: mostrar na tela)
    localStorage.setItem("user", JSON.stringify(user)) // usa "user", não "userCriado"

    setNome("")
    setEmail("")
    setSenha("")
    setConfirmarSenha("")
}

function entrarUser(){
    const userLs = JSON.parse(localStorage.getItem("user"))

    if (!userLs) {
        alert("Nenhum usuário cadastrado")
        return
    }

    if (emailLogin === userLs.email && senhaLogin === userLs.senha) {
      setUsuarioLogado(userLs)
      setHome(true)
        console.log("IGUAL — login ok")
    } else {
        alert("E-mail ou senha incorretos")
    }
}

return (
      <>
        { !entrar ?  (
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
                  <div className="campo-senha-wrapper">
                    <input 
                      type={mostrarSenha ? "text" : "password"}
                      id="senha" 
                      name="senha" 
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      placeholder="Crie uma senha"
                    />
                    <button 
                      type="button" 
                      className="botao-mostrar-senha"
                      onClick={() => setMostrarSenha(!mostrarSenha)}
                    >
                      {mostrarSenha ? "Ocultar" : "Mostrar"}
                    </button>
                  </div>
                  <Gerador onGerar={(senhaGerada) => {
                    setSenha(senhaGerada)
                    setConfirmarSenha(senhaGerada)
                  }} />
                </div>

                <div className="campo">
                  <label htmlFor="confirmarSenha">Confirmar senha</label>
                  <input 
                    type={mostrarSenha ? "text" : "password"} 
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
                  Já tem uma conta? <a href="#" onClick={(e) => { e.preventDefault(); setEntrar(true) }}>Entrar</a>
                </p>
              </div>
            </div> 
            ) : (
          <div className="login-container">
            <div className="form-login">
              <h2>Entrar</h2>

              <div className="campo">
                <label htmlFor="email">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={emailLogin}
                  onChange={(e) => setEmailLogin(e.target.value)}
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div className="campo">
                <label htmlFor="senha">Senha</label>
                <input 
                  type="password" 
                  id="senha" 
                  name="senha" 
                  value={senhaLogin}
                  onChange={(e) => setSenhaLogin(e.target.value)}
                  placeholder="Digite sua senha"
                />
              </div>

              <a href="#" className="esqueceu-senha">Esqueceu a senha?</a>

              <button onClick={() => entrarUser()} className="botao-entrar">
                Entrar
              </button>

              <p className="link-cadastro">
                Ainda não tem uma conta? <a href="#" onClick={(e) => { e.preventDefault(); setEntrar(false) }}>Cadastre-se</a>
              </p>
            </div>
          </div>
        )}
      </>
    )
}

export default FormCadastro