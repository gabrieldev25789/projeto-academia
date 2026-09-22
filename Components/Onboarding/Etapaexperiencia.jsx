const NIVEIS = [
  { id: "iniciante", label: "Iniciante" },
  { id: "intermediario", label: "Intermediário" },
  { id: "avancado", label: "Avançado" }
]

function EtapaExperiencia({ dados, setDados, onFinalizar, onVoltar }) {

  function selecionarNivel(id) {
    setDados({ ...dados, experiencia: id })
  }

  return (
    <div className="etapa">
      <h2>Qual seu nível de experiência?</h2>
      <p className="etapa-subtitulo">Vamos ajustar a dificuldade dos treinos</p>

      <div className="chips-container">
        {NIVEIS.map((nivel) => (
          <button
            key={nivel.id}
            type="button"
            className={`chip ${dados.experiencia === nivel.id ? "chip-selecionado" : ""}`}
            onClick={() => selecionarNivel(nivel.id)}
          >
            {nivel.label}
          </button>
        ))}
      </div>

      <div className="etapa-botoes">
        <button type="button" className="botao-voltar" onClick={onVoltar}>
          Voltar
        </button>
        <button 
          type="button" 
          className="botao-finalizar"
          onClick={onFinalizar}
          disabled={!dados.experiencia}
        >
          Finalizar
        </button>
      </div>
    </div>
  )
}

export default EtapaExperiencia