import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/Shared/ErrorPage'
import Home from '../Pages/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'
import Main from '../Layout/Main'
import Catagories from '../Catagories/Catagories'
import Iphone from '../Iphone/Iphone'


import PrivateRoute from '../Routes/PrivateRoute'
import DashBoradLayout from './DashBoardLayout/DashBoradLayout'

import AllUsers from '../Allusers/AllUsers'




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
        element: <PrivateRoute><Iphone></Iphone></PrivateRoute>,
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
  {
    path:'/dashboard',
    element:<PrivateRoute><DashBoradLayout></DashBoradLayout></PrivateRoute>,
    children:[
      {
        path:'/dashboard',
        element:<AllUsers></AllUsers>
      }
    ]
  }
])

export default router
