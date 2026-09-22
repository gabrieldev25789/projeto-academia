function IndicadorProgresso({ etapaAtual, totalEtapas }) {
  return (
    <div className="indicador-progresso">
      {Array.from({ length: totalEtapas }, (_, index) => index + 1).map((numero) => (
        <div 
          key={numero}
          className={`bolinha ${numero === etapaAtual ? "bolinha-ativa" : ""} ${numero < etapaAtual ? "bolinha-completa" : ""}`}
        />
      ))}
    </div>
  )
}

export default IndicadorProgresso