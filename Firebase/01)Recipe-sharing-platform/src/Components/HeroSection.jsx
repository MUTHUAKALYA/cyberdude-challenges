import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex justify-between px-20 py-10  bg-white'>
        <div className='flex flex-col space-y-3 justify-center '>
        <div>
        <h1 className='text-black font-medium text-xl'>Let's Start cooking with </h1>
        <h1 className='text-orange-300 font-black text-4xl'>Amirtham's Popular Food Recipes</h1>
        </div>
       
       <button className='bg-black text-white font-semibold text-sm px-5 py-2  rounded-full w-[150px]'>Explore Recipes</button>
     
        </div>
        <img src="https://i.pinimg.com/736x/e6/f0/7b/e6f07b7bb31a995a4bc36b757b8b4add.jpg" alt="" className='w-[500px] h-[500px] object-cover'/>
    </div>
  )
}

export default HeroSection