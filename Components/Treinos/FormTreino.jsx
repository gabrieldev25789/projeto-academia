import { useState } from "react"
import "./FormTreino.css"
import SeletorDiaSemana from "./SeletorDiaSemana"
import SeletorTemplateTreino from "./SeletorTemplateTreino"

function FormTreino({ onVoltar }) {

  // Controla em qual "tela" do fluxo o usuário está.
  // Começa em "template" porque é a primeira etapa (escolher um treino pronto ou do zero).
  const [etapaAtual, setEtapaAtual] = useState("template") // "template" | "dia" | "form"

  // Dados do treino que está sendo montado
  const [nomeTreino, setNomeTreino] = useState("")
  const [diaSemana, setDiaSemana] = useState("")
  const [exercicios, setExercicios] = useState([
    { id: 1, nome: "", series: "", repeticoes: "", carga: "" } // linha inicial vazia do formulário
  ])

  // Chamada pelo SeletorTemplateTreino quando o usuário escolhe um treino pronto.
  // Pré-preenche nome e exercícios com os dados do template, e avança pra etapa "dia".
  function escolherTemplate(template) {
    setNomeTreino(template.nome)
    setExercicios(template.exercicios)
    setEtapaAtual("dia")
  }

  // Chamada quando o usuário prefere montar o treino do zero.
  // Não preenche nada, só avança pra etapa "dia" (nomeTreino/exercicios ficam com o valor inicial).
  function criarDoZero() {
    setEtapaAtual("dia")
  }

  // Chamada pelo SeletorDiaSemana quando o usuário escolhe um dia.
  // Guarda o dia e avança pra etapa final do formulário.
  function escolherDia(dia) {
    setDiaSemana(dia)
    setEtapaAtual("form")
  }

  // Adiciona uma nova linha vazia à lista de exercícios (usa Date.now() pra garantir id único)
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

  // Remove da lista o exercício com o id passado
  function removerExercicio(id) {
    setExercicios(exercicios.filter(ex => ex.id !== id))
  }

  // Atualiza um único campo (nome, series, repeticoes ou carga) de um exercício específico,
  // mantendo os outros exercícios da lista intactos
  function atualizarExercicio(id, campo, valor) {
    setExercicios(exercicios.map(ex =>
      ex.id === id ? { ...ex, [campo]: valor } : ex
    ))
  }

  // Roda quando o usuário clica em "Salvar treino"
  function salvarTreino() {

    // Validação: precisa ter um nome
    if (!nomeTreino.trim()) {
      alert("Digite um nome pro treino")
      return
    }

    // Ignora linhas de exercício que ficaram sem nome preenchido
    const exerciciosPreenchidos = exercicios.filter(ex => ex.nome.trim())
    if (exerciciosPreenchidos.length === 0) {
      alert("Adicione pelo menos 1 exercício")
      return
    }

    // Monta o objeto final do treino, incluindo o dia da semana escolhido na etapa anterior
    const novoTreino = {
      id: Date.now(),
      nome: nomeTreino,
      diaSemana: diaSemana,
      exercicios: exerciciosPreenchidos
    }

    // Cada usuário tem sua própria chave no localStorage, baseada no e-mail da sessão
    const emailUsuario = localStorage.getItem("sessaoAtual")
    const chave = `treinos_${emailUsuario}`

    // Lê os treinos já salvos (ou começa com array vazio se não existir nada ainda)
    // e adiciona o novo treino no fim da lista
    const treinosSalvos = JSON.parse(localStorage.getItem(chave)) || []
    const treinosAtualizados = [...treinosSalvos, novoTreino]

    localStorage.setItem(chave, JSON.stringify(treinosAtualizados))

    // Reseta todo o formulário pro estado inicial, incluindo a volta pra primeira etapa
    // (importante: sem isso, reabrir o form cairia direto na etapa "form" de novo)
    setNomeTreino("")
    setDiaSemana("")
    setExercicios([{ id: Date.now(), nome: "", series: "", repeticoes: "", carga: "" }])
    setEtapaAtual("template")

    // Avisa o componente pai (Treinos.jsx) que terminou, pra ele recarregar a lista e fechar o form
    onVoltar()
  }

  return (
    <>
      {/* Etapa 1: escolher um treino pronto ou começar do zero */}
      {etapaAtual === "template" && (
        <SeletorTemplateTreino
          onEscolherTemplate={escolherTemplate}
          onCriarDoZero={criarDoZero}
        />
      )}

      {/* Etapa 2: escolher em qual dia da semana esse treino entra */}
      {etapaAtual === "dia" && (
        <SeletorDiaSemana escolherDia={escolherDia} />
      )}

      {/* Etapa 3: formulário de fato, com nome do treino e lista de exercícios */}
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

          {/* Uma linha de inputs pra cada exercício no array */}
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

                {/* Botão de remover só essa linha de exercício */}
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
            {/* Cancelar não salva nada, só avisa o pai pra fechar o form */}
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