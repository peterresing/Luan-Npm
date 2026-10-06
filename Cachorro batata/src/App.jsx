import './App.css'

function multa(velocidade) {
  if(velocidade <= 80) {
    return 'Tudo certo'
  } else {
    return 'Multado'
  }
}

function carro () {
  const tipo = 'McQueen'
  const marca = 'Ktchaau'
  const ano = 2006
  const velocidade = 60

  return (
    <>
    <h1>Carros e Carros</h1>
    <p>Carro: {tipo}</p>
    <p>Marca: {marca}</p>
    <p>Ano: {ano}</p>
    <p>Velocidade: {velocidade}km/h</p>
    <p>Situação: {multa(velocidade)}</p>
    </>
  )
}

export default carro