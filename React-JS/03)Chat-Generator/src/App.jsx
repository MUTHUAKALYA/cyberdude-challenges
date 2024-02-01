import React from 'react'
import Preview from './Components/Preview'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Input from './Components/Input'
import Card from './Components/Card'

const App = () => {
  return (
    <div>
     <Navbar/>
    {/* <Input/>
    <Preview/> */}
    <Card/>
     <Footer/>
    </div>
  )
}

export default App