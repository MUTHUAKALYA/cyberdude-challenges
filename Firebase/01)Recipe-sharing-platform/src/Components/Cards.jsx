import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
    <div className='bg-orange-50 p-20 text-center space-y-10'>
        <h1 className='text-2xl font-extrabold'>Popular Categories</h1>
       <section className='flex justify-center items-center space-x-20'>
         {/* veg recipes */}
         <div className='bg-white px-3 py-3  max-w-[210px] rounded-lg '>
            <img src="https://eastindianrecipes.net/wp-content/uploads/2022/09/How-to-Make-North-Indian-Thali-Vegetarian-7.jpg" alt="veg-food-image" className='w-[200px] h-[200px]'/>
            <Link to="/veg"><button className='bg-orange-200 px-5 py-3 w-full font-semibold'>Veg Foods</button></Link>
        </div>
        {/* non-veg recipes */}
        <div className='bg-white px-3 py-3  max-w-[210px] rounded-lg '>
            <img src="https://i.pinimg.com/736x/20/92/48/2092483fde63dc2c9e3f2a0038c8af1f.jpg" alt="non-veg-food-image" className='w-[200px] h-[200px]'/>
           <Link to="/nonveg"> <button className='bg-orange-200 px-5 py-3 w-full font-semibold'>Non-Veg Foods</button></Link>
        </div>
        {/* vegan recipes */}
        <div className='bg-white px-3 py-3  max-w-[210px] rounded-lg '>
            <img src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnYW4lMjBmb29kfGVufDB8fDB8fHww" alt="vegan-food-image" className='w-[200px] h-[200px]'/>
            <Link to="vegan"><button className='bg-orange-200 px-5 py-3 w-full font-semibold'>Vegan Foods</button></Link>
        </div>
       </section>
    </div>
  )
}

export default Cards