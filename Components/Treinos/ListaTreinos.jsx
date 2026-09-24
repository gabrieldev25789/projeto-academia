import "./ListaTreinos.css"

function ListaTreinos({ treinos }) {

  if (!treinos || treinos.length === 0) {
    return <p className="lista-treinos-vazia">Nenhum treino salvo ainda.</p>
  }

  return (
    <div className="lista-treinos">
      {treinos.map((treino) => (
        <div key={treino.id} className="card-treino">
          <h3>{treino.nome}</h3>
          <ul>
            {treino.exercicios.map((ex) => (
              <li key={ex.id}>
                {ex.nome} — {ex.series}x{ex.repeticoes} @ {ex.carga}kg
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ListaTreinos