import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import Newsletter from './Components/Newsletter'
import Form from './Components/Form'

const App = () => {
  return (
<>
{/* header */}

<Header/>
<hr className="border  border-gray-950"/>
{/* hero section */}
<HeroSection/>
{/* form */}
<Form/>
<Newsletter/>
{/* footer */}
<Footer/>

</>
  )
}

export default App