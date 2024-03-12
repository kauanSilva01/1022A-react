import'./App.css'
import MeuComponente from './componentes/MeuComponente'

function App() {
  let nome ="kauan"
  let sobrenome ="silva"
  return (
    <div>
    <MeuComponente/>
    <h1 className="meu-nome">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{nome} {sobrenome} </h1>
    <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa {nome} {sobrenome} </h1>
    </div>
  )
}

export default App
