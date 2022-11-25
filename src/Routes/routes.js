import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/Shared/ErrorPage'
import Home from '../Pages/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'
import Main from '../Layout/Main'
import Catagories from '../Catagories/Catagories'
import Iphone from '../Iphone/Iphone'
import Modal from '../Modal/Modal'

import PrivateRoute from '../Routes/PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/iphone',
        element: <Catagories></Catagories>
      },
      {
        path: '/iphone/:id',
        element: <Iphone></Iphone>,
      },
      {
        path: '/bookings',
        element: <PrivateRoute><Modal></Modal></PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
])

export default router
