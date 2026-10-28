import './App.css'
import Pacote from './Pacote'
import type { PacoteType } from './types'


const data:Array<PacoteType> = [
  {
    id:'9d94089f-3b5b-4c7f-aff1-1639e474f235',
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso: 2.34
  },
  {
    id:'0690b8bf-a11a-438b-a4be-9ebcae5ded08',
    largura: 25.0,
    altura: 35.0,
    profundidade: 45.0,
    peso: 2.35
  }
]

function App() {

  return (
    <>
      <h2>Pacotes</h2>
      <div className='pacotes'>
        {data.map(p => <Pacote pacote={p} key={p.id}/>)}
      </div>
    </>
  )
}

export default App
