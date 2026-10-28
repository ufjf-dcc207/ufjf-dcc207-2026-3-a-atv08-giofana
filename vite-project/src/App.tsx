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
  }
]

function App() {

  return (
    <>
      <h2>Pacotes</h2>
      <div className='pacotes'>
        <Pacote pacote={data[0]}/>
      </div>
    </>
  )
}

export default App
