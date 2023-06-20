import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import GoogleIcon from '@mui/icons-material/Google'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../../config/firebase/firebase'
import { useNavigate } from 'react-router-dom'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'

export default function SignIn() {
  app
  const provider = new GoogleAuthProvider()
  const auth = getAuth()
  const navigate = useNavigate()
  const token = localStorage.getItem('userToken')

  React.useEffect(() => {
    if (typeof token === 'string') {
      navigate('/home')
    }
  }, [])

  function signInWithGoogle() {
    event.preventDefault()
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        localStorage.setItem('userToken', token)
        navigate('/home')
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.log(errorMessage)
      })
  }

  return (
    // <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs" sx={{ overflowY: 'hidden', overflowX: 'hidden' }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          overflowY: 'hidden',
          overflowX: 'hidden',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          {/* <LockOutlinedIcon /> */}
          <FitnessCenterIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ fontFamily: 'Montserrat' }}>
          Iniciar sesión
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            mt: 1,
            height: '60%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflowY: 'hidden',
            overflowX: 'hidden',
          }}
        >
          <button
            onClick={signInWithGoogle}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px 24px',
              gap: '8px',
              width: '320px',
              height: '44px',
              backgroundColor: '#eeeef7',
              borderRadius: '4px',
              color: '#000',
              fontFamily: 'Montserrat',
            }}
          >
            <GoogleIcon />
            Continuar con Google
          </button>
        </Box>
      </Box>
    </Container>
    // </ThemeProvider>
  )
}
