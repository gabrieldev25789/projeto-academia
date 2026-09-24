import { useState } from "react"

function FormTreino({ onVoltar }) {

  const [nomeTreino, setNomeTreino] = useState("")

  const [exercicios, setExercicios] = useState([
    { id: 1, nome: "", series: "", repeticoes: "", carga: "" }
  ])

  function adicionarExercicio() {
    const novoExercicio = { 
      id: Date.now(), 
      nome: "", 
      series: "", 
      repeticoes: "", 
      carga: "" 
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

  return (
    <div className="form-treino">
      <h1>Novo treino</h1>

      <div className="campo">
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
              onChange={(e) => atualizarExercicio(exercicio.id, "nome", e.target.value)}
              className="input-nome-exercicio"
            />

            <input 
              type="number" 
              placeholder="Séries"
              value={exercicio.series}
              onChange={(e) => atualizarExercicio(exercicio.id, "series", e.target.value)}
              className="input-numero"
            />

            <input 
              type="number" 
              placeholder="Reps"
              value={exercicio.repeticoes}
              onChange={(e) => atualizarExercicio(exercicio.id, "repeticoes", e.target.value)}
              className="input-numero"
            />

            <input 
              type="number" 
              placeholder="Carga (kg)"
              value={exercicio.carga}
              onChange={(e) => atualizarExercicio(exercicio.id, "carga", e.target.value)}
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

      <button type="button" className="botao-add-exercicio" onClick={adicionarExercicio}>
        + Adicionar exercício
      </button>

      <div className="form-treino-botoes">
        <button type="button" className="botao-voltar" onClick={onVoltar}>
          Cancelar
        </button>
        <button type="button" className="botao-salvar-treino">
          Salvar treino
        </button>
      </div>
    </div>
  )
}

export default FormTreino