import "./ListaTreinos.css"

const ORDEM_DIAS = [
  { id: "segunda", label: "Segunda-feira" },
  { id: "terca", label: "Terça-feira" },
  { id: "quarta", label: "Quarta-feira" },
  { id: "quinta", label: "Quinta-feira" },
  { id: "sexta", label: "Sexta-feira" },
  { id: "sabado", label: "Sábado" },
  { id: "domingo", label: "Domingo" }
]

function agruparPorDia(treinos) {
  return treinos.reduce((grupos, treino) => {
    const dia = treino.diaSemana

    if (!grupos[dia]) {
      grupos[dia] = []
    }

    grupos[dia].push(treino)
    return grupos
  }, {})
}

function ListaTreinos({ treinos }) {

  if (!treinos || treinos.length === 0) {
    return <p className="lista-treinos-vazia">Nenhum treino salvo ainda.</p>
  }

  const treinosPorDia = agruparPorDia(treinos)

  return (
    <div className="lista-treinos">
      {ORDEM_DIAS.map((dia) => {
        const treinosDoDia = treinosPorDia[dia.id]

        if (!treinosDoDia || treinosDoDia.length === 0) {
          return null
        }

        return (
          <div key={dia.id} className="secao-dia">
            <h2 className="secao-dia-titulo">{dia.label}</h2>

            <div className="secao-dia-treinos">
              {treinosDoDia.map((treino) => (
                <div key={treino.id} className="card-treino">
                  <div className="card-treino-cabecalho">
                    <h3>{treino.nome}</h3>
                    <span className="card-treino-contador">
                      {treino.exercicios.length} {treino.exercicios.length > 1 ? "exercícios" : "exercício"}
                    </span>
                  </div>
                  <ul>
                    {treino.exercicios.map((ex) => (
                      <li key={ex.id}>
                        <span className="exercicio-nome">{ex.nome}</span>
                        <span className="exercicio-detalhes">
                          <strong>{ex.series}x{ex.repeticoes}</strong> · {ex.carga}kg
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListaTreinos