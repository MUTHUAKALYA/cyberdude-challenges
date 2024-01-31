import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import General from './Layout/General.jsx'
import Homepage from './pages/Homepage.jsx'

import About from './pages/About.jsx'
import Blogs from './pages/Blogs.jsx'
import Contact from './pages/Contact.jsx'



const router = createBrowserRouter([{
  path:"/",
  element:<General/>,
  children : [
    {
      path:"/",
      element:<Homepage/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/blogs",
      element:<Blogs/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }
  ]

  
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
