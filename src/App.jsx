import React from 'react'
import Accountcard from './components/Accountcard.jsx'
import Homepage from './components/Homepage.jsx'
import CreateAccount from './components/CreateAccount';
import Signin from './components/Signin.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const App = () => {
   const router = createBrowserRouter([
      {
        path: '/',
        element: <Homepage /> 
      },
       {
        path: '/Signin',
        element: <Signin /> 
      },
      {
        path: '/CreateAccount',
        element: <CreateAccount />
      },
       {
        path: '/Accountcard',
        element: <Accountcard /> 
      },
  ])
  
  return (
    <RouterProvider router={router} />
  )
}

export default App