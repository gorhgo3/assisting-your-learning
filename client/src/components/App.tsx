import { useState } from 'react'
import '../styles/App.css'
import Header from './Header'
import { gatherAllData } from '../api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank">
          <h1>Hello world</h1>
        </a>
      </div>
        <button onClick={gatherAllData}>press to print resources</button>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
