import { useState } from "react"
import "./FormTreino.css"
import SeletorDiaSemana from "./SeletorDiaSemana"
import SeletorTemplateTreino from "./SeletorTemplateTreino"

function FormTreino({ onVoltar }) {

  const [etapaAtual, setEtapaAtual] = useState("template") // "template" | "dia" | "form"

  const [nomeTreino, setNomeTreino] = useState("")
  const [diaSemana, setDiaSemana] = useState("")
  const [exercicios, setExercicios] = useState([
    { id: 1, nome: "", series: "", repeticoes: "", carga: "" }
  ])

  function escolherTemplate(template) {
    setNomeTreino(template.nome)
    setExercicios(template.exercicios)
    setEtapaAtual("dia")
  }

  function criarDoZero() {
    setEtapaAtual("dia")
  }

  function escolherDia(dia) {
    setDiaSemana(dia)
    setEtapaAtual("form")
  }

  function adicionarExercicio() {
    const novoExercicio = {
      id: Date.now(),
      nome: "",
      series: "",
      repeticoes: "",
      carga: "",
    }
    setExercicios([...exercicios, novoExercicio])
  }

  function removerExercicio(id) {
    setExercicios(exercicios.filter(ex => ex.id !== id))
  }

  function atualizarExercicio(id, campo, valor) {
    setExercicios(exercicios.map(ex =>
      ex.id === id ? { ...ex, [campo]: valor } : ex
    ))
  }

  function salvarTreino() {

    if (!nomeTreino.trim()) {
      alert("Digite um nome pro treino")
      return
    }

    const exerciciosPreenchidos = exercicios.filter(ex => ex.nome.trim())
    if (exerciciosPreenchidos.length === 0) {
      alert("Adicione pelo menos 1 exercício")
      return
    }

    const novoTreino = {
      id: Date.now(),
      nome: nomeTreino,
      diaSemana: diaSemana,
      exercicios: exerciciosPreenchidos
    }

    const emailUsuario = localStorage.getItem("sessaoAtual")
    const chave = `treinos_${emailUsuario}`

    const treinosSalvos = JSON.parse(localStorage.getItem(chave)) || []
    const treinosAtualizados = [...treinosSalvos, novoTreino]

    localStorage.setItem(chave, JSON.stringify(treinosAtualizados))

    setNomeTreino("")
    setDiaSemana("")
    setExercicios([{ id: Date.now(), nome: "", series: "", repeticoes: "", carga: "" }])
    setEtapaAtual("template")

    onVoltar()
  }

  return (
    <>
      {etapaAtual === "template" && (
        <SeletorTemplateTreino
          onEscolherTemplate={escolherTemplate}
          onCriarDoZero={criarDoZero}
        />
      )}

      {etapaAtual === "dia" && (
        <SeletorDiaSemana escolherDia={escolherDia} />
      )}

      {etapaAtual === "form" && (
        <div className="form-treino">
          <h3>Dia: {diaSemana}</h3>

          <h1>Novo treino</h1>

          <div className="campo-treino">
            <label htmlFor="nomeTreino">Nome do treino</label>
            <input
              type="text"
              id="nomeTreino"
              value={nomeTreino}
              onChange={(e) => setNomeTreino(e.target.value)}
              placeholder="Ex: Treino A - Peito e Tríceps"
            />
          </div>

          <h2>Exercícios</h2>

          <div className="lista-exercicios">
            {exercicios.map((exercicio) => (
              <div key={exercicio.id} className="exercicio-linha">
                <input
                  type="text"
                  placeholder="Nome do exercício"
                  value={exercicio.nome}
                  onChange={(e) =>
                    atualizarExercicio(exercicio.id, "nome", e.target.value)
                  }
                  className="input-nome-exercicio"
                />

                <input
                  type="number"
                  placeholder="Séries"
                  value={exercicio.series}
                  onChange={(e) =>
                    atualizarExercicio(exercicio.id, "series", e.target.value)
                  }
                  className="input-numero"
                />

                <input
                  type="number"
                  placeholder="Reps"
                  value={exercicio.repeticoes}
                  onChange={(e) =>
                    atualizarExercicio(exercicio.id, "repeticoes", e.target.value)
                  }
                  className="input-numero"
                />

                <input
                  type="number"
                  placeholder="Carga (kg)"
                  value={exercicio.carga}
                  onChange={(e) =>
                    atualizarExercicio(exercicio.id, "carga", e.target.value)
                  }
                  className="input-numero"
                />

                <button
                  type="button"
                  className="botao-remover-exercicio"
                  onClick={() => removerExercicio(exercicio.id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="botao-add-exercicio"
            onClick={adicionarExercicio}
          >
            + Adicionar exercício
          </button>

          <div className="form-treino-botoes">
            <button type="button" className="botao-voltar" onClick={onVoltar}>
              Cancelar
            </button>

            <button
              type="button"
              className="botao-salvar-treino"
              onClick={salvarTreino}
            >
              Salvar treino
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default FormTreino