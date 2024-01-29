import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import General from './layout/General.jsx'
import Homepage from "./pages/Homepage.jsx"
import Blogs from "./pages/Blogs.jsx"
import Travel from './pages/Travel.jsx'
import Food from "./pages/Food.jsx"
import Fitness from './pages/Fitness.jsx'



const router = createBrowserRouter([{
  path:"/",
  element:<General/>,
  children:[
    {
      path:"/",
      element:<Homepage/>
  },
  {
    path:"/blogs",
    element:<Blogs/>
  },
  {
    path:"/Travel",
    element:<Travel/>
  },
  {
    path:"/Food",
    element:<Food/>
  },
  {
    path:"/Fitness",
    element:<Fitness/>
  }
]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>
 
)
