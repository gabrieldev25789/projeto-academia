import { useState } from "react"
import "./FormDieta.css"

function FormDieta({ onVoltar }) {

  const [nomeRefeicao, setNomeRefeicao] = useState("")
  const [tipoRefeicao, setTipoRefeicao] = useState("")

  const [alimentos, setAlimentos] = useState([
    { id: 1, nome: "", quantidade: "", calorias: "" }
  ])

  function adicionarAlimento() {
    const novoAlimento = {
      id: Date.now(),
      nome: "",
      quantidade: "",
      calorias: ""
    }
    setAlimentos([...alimentos, novoAlimento])
  }

  function removerAlimento(id) {
    setAlimentos(alimentos.filter(a => a.id !== id))
  }

  function atualizarAlimento(id, campo, valor) {
    setAlimentos(alimentos.map(a =>
      a.id === id ? { ...a, [campo]: valor } : a
    ))
  }

  function escolherTipo(tipo) {
    setTipoRefeicao(tipo)
  }

  function salvarRefeicao() {

    if (!nomeRefeicao.trim()) {
      alert("Digite um nome pra refeição")
      return
    }

    if (!tipoRefeicao) {
      alert("Escolha o tipo de refeição")
      return
    }

    const alimentosPreenchidos = alimentos.filter(a => a.nome.trim())
    if (alimentosPreenchidos.length === 0) {
      alert("Adicione pelo menos 1 alimento")
      return
    }

    const novaRefeicao = {
      id: Date.now(),
      nome: nomeRefeicao,
      tipoRefeicao: tipoRefeicao,
      alimentos: alimentosPreenchidos
    }

    const emailUsuario = localStorage.getItem("sessaoAtual")
    const chave = `dietas_${emailUsuario}`

    const dietasSalvas = JSON.parse(localStorage.getItem(chave)) || []
    const dietasAtualizadas = [...dietasSalvas, novaRefeicao]

    localStorage.setItem(chave, JSON.stringify(dietasAtualizadas))

    setNomeRefeicao("")
    setTipoRefeicao("")
    setAlimentos([{ id: Date.now(), nome: "", quantidade: "", calorias: "" }])

    onVoltar()
  }

  return (
    <div className="form-dieta">
      <h1>Nova refeição</h1>

      <div className="campo-dieta">
        <label htmlFor="nomeRefeicao">Nome da refeição</label>
        <input
          type="text"
          id="nomeRefeicao"
          placeholder="Ex: Café da manhã"
          value={nomeRefeicao}
          onChange={(e) => setNomeRefeicao(e.target.value)}
        />
      </div>

      <h2>Tipo de refeição</h2>
      <div className="chips-refeicao">
        {["Café da manhã", "Almoço", "Lanche", "Jantar"].map((tipo) => (
          <button
            key={tipo}
            type="button"
            className={`chip-refeicao ${tipoRefeicao === tipo ? "chip-refeicao-ativo" : ""}`}
            onClick={() => escolherTipo(tipo)}
          >
            {tipo}
          </button>
        ))}
      </div>

      <h2>Alimentos</h2>

      <div className="lista-alimentos">
        {alimentos.map((alimento) => (
          <div key={alimento.id} className="alimento-linha">
            <input
              type="text"
              placeholder="Nome do alimento"
              className="input-nome-alimento"
              value={alimento.nome}
              onChange={(e) => atualizarAlimento(alimento.id, "nome", e.target.value)}
            />
            <input
              type="text"
              placeholder="Quantidade"
              className="input-texto"
              value={alimento.quantidade}
              onChange={(e) => atualizarAlimento(alimento.id, "quantidade", e.target.value)}
            />
            <input
              type="number"
              placeholder="Calorias"
              className="input-numero"
              value={alimento.calorias}
              onChange={(e) => atualizarAlimento(alimento.id, "calorias", e.target.value)}
            />
            <button
              type="button"
              className="botao-remover-item"
              onClick={() => removerAlimento(alimento.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <button type="button" className="botao-add-alimento" onClick={adicionarAlimento}>
        + Adicionar alimento
      </button>

      <div className="form-dieta-botoes">
        <button type="button" className="botao-voltar" onClick={onVoltar}>
          Cancelar
        </button>
        <button type="button" className="botao-salvar-dieta" onClick={salvarRefeicao}>
          Salvar refeição
        </button>
      </div>
    </div>
  )
}

export default FormDieta