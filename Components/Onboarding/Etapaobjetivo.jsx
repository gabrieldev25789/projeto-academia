const OBJETIVOS = [
  { id: "emagrecer", label: "Emagrecer" },
  { id: "ganhar_massa", label: "Ganhar massa" },
  { id: "manter_peso", label: "Manter peso" },
  { id: "condicionamento", label: "Condicionamento físico" }
]

function EtapaObjetivo({ dados, setDados, onProximo }) {

  function selecionarObjetivo(id) {
    setDados({ ...dados, objetivo: id })
  }

  return (
    <div className="etapa">
      <h2>Qual é o seu objetivo?</h2>
      <p className="etapa-subtitulo">Isso ajuda a personalizar seus treinos</p>

      <div className="chips-container">
        {OBJETIVOS.map((objetivo) => (
          <button
            key={objetivo.id}
            type="button"
            className={`chip ${dados.objetivo === objetivo.id ? "chip-selecionado" : ""}`}
            onClick={() => selecionarObjetivo(objetivo.id)}
          >
            {objetivo.label}
          </button>
        ))}
      </div>

      <button 
        type="button" 
        className="botao-proximo"
        onClick={onProximo}
        disabled={!dados.objetivo}
      >
        Próximo
      </button>
    </div>
  )
}

export default EtapaObjetivo