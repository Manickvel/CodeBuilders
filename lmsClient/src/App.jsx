import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'

function App() {
  const route =createBrowserRouter([
      {
        path:"/login",
        element:<LoginPage/>
      },
    {
      path:"/Register",
      element:<RegisterPage/>
    }])

  return (
    <RouterProvider router={route}></RouterProvider>
  )
}

export default App
