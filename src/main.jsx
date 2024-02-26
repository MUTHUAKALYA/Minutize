import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Login from './Pages/Login.jsx'
import General from './Layout/General.jsx'
import HomePage from './Pages/HomePage.jsx'
import SignUp from './Pages/SignUp.jsx'
import CreateMinutes from './Pages/CreateMinutes.jsx'
import ViewMinutes from './Pages/ViewMinutes.jsx'





const router = createBrowserRouter([{
  path:"/",
  element:<General/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:"/createminutes",
    element:<CreateMinutes/>
  },
  
    {
      path:"/viewminutes",
      element:<ViewMinutes/>
    }
  
 
]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>
  // <>
  // <Header/>
  // <hr  className='border border-lightPrimary'/>
  // <HeroSection/>
  // <Login/>
  // </>
  
 
)
