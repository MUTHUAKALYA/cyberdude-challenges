import React from 'react'
import Button from '../Components/Button'

const ButtonsPage = () => {
  return (
    <div className='bg-gray-100 px-5 py-10 max-w-2xl flex flex-col justify-center items-center rounded-lg my-10 space-y-5 mx-auto'>
        <h2 className='font-semibold  text-lg '>Buttons</h2>
   <div>
   <Button color="bg-blue-500" buttonName="Primary"/>
    <Button color="bg-gray-600" buttonName="Secondary"/>
    <Button color="bg-green-500" buttonName="Success"/>
    <Button color="bg-red-500" buttonName="Danger"/>
    <Button color="bg-yellow-500" buttonName="Warning"/>
    <Button color="bg-sky-500" buttonName="Info"/>
    <Button color="bg-white" buttonName="Light"/>
    <Button color="bg-gray-950" buttonName="Dark"/>
   </div>
    </div>
  )
}

export default ButtonsPage