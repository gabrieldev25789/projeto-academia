import { TREINOS_PREDEFINIDOS } from "../../data/treinosPredefinidos"
import "./SeletorTemplateTreino.css"

function SeletorTemplateTreino({ onEscolherTemplate, onCriarDoZero }) {

  return (
    <div className="seletor-template">
      <h1>Escolha um treino</h1>

      <div className="lista-templates">
        {TREINOS_PREDEFINIDOS.map((treino) => (
          <div key={treino.id} className="card-template">
            <span className="template-categoria">{treino.categoria}</span>
            <h2>{treino.nome}</h2>

            <ul className="template-exercicios">
              {treino.exercicios.map((exercicio) => (
                <li key={exercicio.id}>{exercicio.nome}</li>
              ))}
            </ul>

            <button
              type="button"
              className="botao-usar-template"
              onClick={() => onEscolherTemplate(treino)}
            >
              Usar esse treino
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="botao-criar-do-zero"
        onClick={onCriarDoZero}
      >
        Criar treino do zero
      </button>
    </div>
  )
}

export default SeletorTemplateTreino