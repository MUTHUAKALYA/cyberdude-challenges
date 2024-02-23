import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import General from './Layout/General.jsx'
import Homepage from './Pages/Homepage.jsx'
import Veg from './Pages/Veg.jsx'
import NonVeg from './Pages/NonVeg.jsx'
import Vegan from './Pages/Vegan.jsx'

const router = createBrowserRouter([{
  path:"/",
  element:<General/>,
  children:[{
    path:"/",
    element:<Homepage/>
  },
{
  path:"/veg",
  element:<Veg/>
},
{
  path:"/nonveg",
  element:<NonVeg/>
},
{
  path:"/vegan",
  element:<Vegan/>
}]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
