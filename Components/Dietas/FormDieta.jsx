import "./FormDieta.css"

function FormDieta() {
  return (
    <div className="form-dieta">
      <h1>Nova refeição</h1>

      <div className="campo-dieta">
        <label htmlFor="nomeRefeicao">Nome da refeição</label>
        <input 
          type="text" 
          id="nomeRefeicao" 
          placeholder="Ex: Café da manhã"
        />
      </div>

      <h2>Tipo de refeição</h2>
      <div className="chips-refeicao">
        <button type="button" className="chip-refeicao">Café da manhã</button>
        <button type="button" className="chip-refeicao">Almoço</button>
        <button type="button" className="chip-refeicao">Lanche</button>
        <button type="button" className="chip-refeicao">Jantar</button>
      </div>

      <h2>Alimentos</h2>

      <div className="lista-alimentos">
        <div className="alimento-linha">
          <input 
            type="text" 
            placeholder="Nome do alimento"
            className="input-nome-alimento"
          />
          <input 
            type="text" 
            placeholder="Quantidade"
            className="input-texto"
          />
          <input 
            type="number" 
            placeholder="Calorias"
            className="input-numero"
          />
          <button type="button" className="botao-remover-item">
            ✕
          </button>
        </div>
      </div>

      <button type="button" className="botao-add-alimento">
        + Adicionar alimento
      </button>

      <div className="form-dieta-botoes">
        <button type="button" className="botao-voltar">
          Cancelar
        </button>
        <button type="button" className="botao-salvar-dieta">
          Salvar refeição
        </button>
      </div>
    </div>
  )
}

export default FormDieta