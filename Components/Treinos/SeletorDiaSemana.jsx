import "./SeletorDiaSemana.css"

const DIAS = [
  { id: "segunda", label: "Seg" },
  { id: "terça", label: "Ter" },
  { id: "quarta", label: "Qua" },
  { id: "quinta", label: "Qui" },
  { id: "sexta", label: "Sex" },
  { id: "sabado", label: "Sáb" },
  { id: "domingo", label: "Dom" }
]

function SeletorDiaSemana({ escolherDia }) {

  return (
    <div className="seletor-dia-container">
      <h2>Qual dia da semana é esse treino?</h2>
      <p className="seletor-dia-subtitulo">Isso ajuda a organizar sua rotina semanal</p>

      <div className="seletor-dia-chips">
        {DIAS.map((dia) => (
          <button
            key={dia.id}
            type="button"
            className="chip-dia"
            onClick={() => escolherDia(dia.id)}
          >
            {dia.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SeletorDiaSemana