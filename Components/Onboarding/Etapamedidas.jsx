import { useState, useEffect } from "react"
import { useImc } from "../ImcContext"

function EtapaMedidas({ dados, setDados, onProximo, onVoltar }) {

  const { setImc } = useImc()

const LIMITES = {
  altura: { min: 100, max: 220 },
  peso: { min: 30, max: 400 },
  idade: { min: 10, max: 120 }
}

const [erro, setErro] = useState("")

function validarAntesDeAvancar() {

  for (const campo in LIMITES) {

    const valor = Number(dados[campo])
    const limite = LIMITES[campo]

    if (valor < limite.min) {
      setErro(`${campo} deve ser pelo menos ${limite.min}`)
      return
    }
  }

  setErro("")
  onProximo()
}

function atualizarCampo(campo, valor) {
  const limite = LIMITES[campo]

  if (limite && valor !== "") {
    const numero = Number(valor)
    if (numero > limite.max) {
      return // só bloqueia se ultrapassar o máximo
    }
  }

  setDados({ ...dados, [campo]: valor })
}

  useEffect(() => {
    const altura = Number(dados.altura) / 100
    const peso = Number(dados.peso)

    if (altura > 0 && peso > 0) {
      setImc(peso / (altura ** 2))
    }
  }, [dados.altura, dados.peso])

  const podeAvancar = dados.peso && dados.altura && dados.idade

  return (
    <div className="etapa">
      <h2>Suas medidas</h2>
      <p className="etapa-subtitulo">Usamos isso pra calcular metas e progresso</p>

      <div className="campo">
        <label htmlFor="peso">Peso (kg)</label>
        <input 
          type="number" 
          id="peso" 
          value={dados.peso}
          onChange={(e) => atualizarCampo("peso", e.target.value)}
          placeholder="Ex: 75"
        />
      </div>

      <div className="campo">
        <label htmlFor="altura">Altura (cm)</label>
        <input 
          type="number" 
          id="altura" 
          value={dados.altura}
          onChange={(e) => atualizarCampo("altura", e.target.value)}
          placeholder="Ex: 175"
        />
      </div>

      <div className="campo">
        <label htmlFor="idade">Idade</label>
        <input 
          type="number" 
          id="idade" 
          value={dados.idade}
          onChange={(e) => atualizarCampo("idade", e.target.value)}
          placeholder="Ex: 25"
        />
      </div>

      <div className="etapa-botoes">
        <button type="button" className="botao-voltar" onClick={onVoltar}>
          Voltar
        </button>
        <button 
            type="button" 
            className="botao-proximo"
            onClick={validarAntesDeAvancar}
            disabled={!podeAvancar}
            >
            Próximo
        </button>
      </div>
      {erro && <p className="mensagem-erro">{erro}</p>}
    </div>
  )
}

export default EtapaMedidas