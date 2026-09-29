import "./ListaDieta.css"

function ListaDieta({ dietas }) {

  if (!dietas || dietas.length === 0) {
    return <p className="lista-dietas-vazia">Nenhuma refeição salva ainda.</p>
  }

  return (
    <div className="lista-dietas">
      {dietas.map((dieta) => (
        <div key={dieta.id} className="card-dieta">
          <div className="card-dieta-cabecalho">
            <span className="card-dieta-tipo">{dieta.tipoRefeicao}</span>
            <h3>{dieta.nome}</h3>
          </div>
          <ul>
            {dieta.alimentos.map((a) => (
              <li key={a.id}>
                <span>{a.nome}</span>
                <span>{a.quantidade} · {a.calorias} kcal</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ListaDieta