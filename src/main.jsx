import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './components/Auth/Auth.jsx'

const router = createBrowserRouter([
  {
    path: '/home',
    element: <App />,
  },
  {
    path: '/',
    element: <SignIn />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
