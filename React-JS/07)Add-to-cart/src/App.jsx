import React from 'react'
import Header from './Components/Header'
const App = () => {
 
  
  return (
    <div>
      <Header/>

      <Card productName="BESIGN foldable Laptop stand raiser" productDescription = "Portable and Adjustable aluminium stand" color="Silver" image="https://m.media-amazon.com/images/I/51KyaTB1EKL._AC_SX466_.jpg" basePrice={2271} productId= {1} />

      <Card productName="Skyhub Wireless mechanical keyboard & mouse combo" productDescription = "Ergonomic full size typewriter with retroround keycaps keyboard" color="Purple" image="https://m.media-amazon.com/images/I/71yzmBDeWEL._AC_UY327_FMwebp_QL65_.jpg" basePrice={3321} productId= {2} />

      
      <Card productName="LCVXYERQ Large 63Inch Electric Standing Desk" productDescription = "Height Adjustable, Sit Stand up Desk Home Office Computer Ergonomic Desk Memory Preset with Pencil Tray" color="White" image="https://m.media-amazon.com/images/I/61lH8gXzSDL._AC_UL480_FMwebp_QL65_.jpg" basePrice={11625} productId= {3} />
    </div>
  )
}

export default App

