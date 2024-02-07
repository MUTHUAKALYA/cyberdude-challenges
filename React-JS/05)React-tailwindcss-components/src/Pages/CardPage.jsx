import React from 'react'
import Card from '../Components/Card'

const CardPage = () => {
    const cardDetails = [
        {
        id:1,
        title:"Cads",
        desc:"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.",
    },
    {
        id:2,
        title:"React Components",
        desc:"React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.",
    }]
    console.log(cardDetails)
  return (
   
    <div className='flex flex-col mx-auto max-w-2xl bg-gray-100 gap-x-5 rounded-lg items-center py-10 space-y-10 my-10'>
         <h2 className='font-semibold  text-lg '>Cards</h2>
       <Card cardDetails={cardDetails}/>
    </div>
  )
}

export default CardPage