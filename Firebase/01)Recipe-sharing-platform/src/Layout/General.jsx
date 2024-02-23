import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const General = () => {
  return (
    <div>
        <Header/>
        <hr className="border  border-gray-950"/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default General