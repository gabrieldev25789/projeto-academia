import "./Gerador.css"

function Gerador({ onGerar }) {

  function gerarSenha() {
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"
    const tamanho = 12

    let senhaGerada = ""

    for (let i = 0; i < tamanho; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length)
      senhaGerada += caracteres[indiceAleatorio]
    }

    onGerar(senhaGerada)
    console.log(senhaGerada)
  }

  return (
    <div className="gerador-senha">
      <a href="#" onClick={(e) => { e.preventDefault(); gerarSenha() }}>
        Gerar senha
      </a>
    </div>
  )
}

export default Gerador