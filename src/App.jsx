import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routine from './components/Routine/Routine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Easy GYM</h1>
      <p className="read-the-docs">Chino volve a jugar al futbol</p>
      <Routine />
    </div>
  )
}

export default App
