import React, { useState, useEffect } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import '../../App.css'
import Routine from '../Routine/Routine'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useNavigate } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

export default function Home() {
  const navigate = useNavigate()
  const [tiempo, setTiempo] = useState({ minutos: 0, segundos: 0 })
  const [inicio, setInicio] = useState(false)
  const token = localStorage.getItem('userToken')

  React.useEffect(() => {
    if (typeof token !== 'string') {
      navigate('/')
    }
  }, [token])

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
    setInicio(false)
  }

  const handleStart = () => {
    setInicio(true)
  }
  const handleReboot = () => {
    setTiempo({ minutos: 0, segundos: 0 })
    setInicio(false)
  }

  if (typeof token !== 'string') {
    return (
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </div>
    )
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
        <Button onClick={handleStop}>Detener</Button>
        <Button onClick={handleReboot}>Reiniciar</Button>
      </ButtonGroup>
      <br />
      <div style={{ width: '80%' }}>
        <Routine />
      </div>
    </div>
  )
}
