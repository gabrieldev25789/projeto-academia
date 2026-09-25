import "./ListaTreinos.css"

function ListaTreinos({ treinos }) {

  if (!treinos || treinos.length === 0) {
    return <p className="lista-treinos-vazia">Nenhum treino salvo ainda.</p>
  }

return (
  <div className="lista-treinos">
    {treinos.map((treino) => (
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
)
}

export default ListaTreinos