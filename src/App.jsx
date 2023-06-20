import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routine from './components/Routine/Routine'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

function App() {
  const [tiempo, setTiempo] = useState({ minutos: 0, segundos: 0 })
  const [inicio, setInicio] = useState(false)

  useEffect(() => {
    let interval

    if (inicio) {
      interval = setInterval(() => {
        setTiempo(prevTiempo => {
          let nuevosSegundos = prevTiempo.segundos + 1
          let nuevosMinutos = prevTiempo.minutos

          if (nuevosSegundos === 60) {
            nuevosSegundos = 0
            nuevosMinutos += 1
          }

          return { minutos: nuevosMinutos, segundos: nuevosSegundos }
        })
      }, 1000) // 1000 ms = 1 segundo
    }

    return () => {
      clearInterval(interval)
    }
  }, [inicio])

  const handleChangeMinutos = event => {
    const nuevosMinutos = parseInt(event.target.value, 10)
    setTiempo({ minutos: nuevosMinutos, segundos: 0 })
  }

  const handleStop = () => {
    setTiempo({ minutos: 0, segundos: 0 })
    setInicio(false)
  }

  const handleStart = () => {
    setInicio(true)
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <div>
        <h1>Mi rutina</h1>
      </div>
      <h2>
        {tiempo.minutos}:{tiempo.segundos}
      </h2>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={handleStart}>Iniciar</Button>
        <Button onClick={handleStop}>Reiniciar</Button>
      </ButtonGroup>
      <br />
      <div style={{ width: '80%' }}>
        <Routine />
      </div>
    </div>
  )
}

export default App
