import React from 'react'

const Card = ({cardDetails}) => {
  return (
   cardDetails.map((details)=>{
    return <div  key={details.id} className='max-w-md flex flex-col space-y-5 text-justify  bg-white px-10 py-10 rounded-lg'>
    <img src="https://img.freepik.com/premium-photo/blue-picture-frame-mockup-transparent-background-rectangular-photo-frame-vector-illustration_740533-112.jpg" alt="card-image" className='w-full h-60 object-cover'/>
    <h6 className='font-semibold text-lg'>{details.title}</h6>
    <p className='font-light'>{details.desc}</p>
    <button className='bg-red-400 py-2 px-5 rounded-lg font-medium text-lg'>View</button>
</div>
   })
  )
}

export default Card