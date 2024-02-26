import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Header from './Components/Header.jsx'

// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import General from './layout/General.jsx'
// import Homepage from "./pages/Homepage.jsx"
// import About from "./pages/About.jsx"
// import Blogs from "./pages/Blogs.jsx"
// import Travel from './pages/Travel.jsx'
// import Food from "./pages/Food.jsx"
// import Fitness from './pages/Fitness.jsx'



// const router = createBrowserRouter([{
//   path:"/",
//   element:<General/>,
//   children:[
//     {
//       path:"/",
//       element:<Homepage/>
//   },
//   {
//     path:"/about",
//     element:<About/>
//   },
//   {
//     path:"/blogs",
//     element:<Blogs/>
//   },
//   {
//     path:"/Travel",
//     element:<Travel/>
//   },
//   {
//     path:"/Food",
//     element:<Food/>
//   },
//   {
//     path:"/Fitness",
//     element:<Fitness/>
//   }
// ]
// }])
ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <RouterProvider router={router}/>
  <Header/>
 
)
