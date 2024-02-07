import React from 'react'
import Navbar from './Components/Navbar'
import AlertPage from './Pages/AlertPage'
import ButtonsPage from './Pages/ButtonsPage'
import CardPage from './Pages/CardPage'

const App = () => {
  return (
    <div>
        <Navbar/>
        <AlertPage/>
        <ButtonsPage/>
        <CardPage/>
    </div>
  )
}

export default App