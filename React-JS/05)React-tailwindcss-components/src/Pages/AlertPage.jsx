import React from 'react'
import Alert from '../Components/Alert'

const AlertPage = () => {
  return (
    <div className='max-w-2xl px-5 py-10 bg-gray-100 rounded-lg m-5'>
        <h2 className='text-center font-semibold text-xl'>Alerts</h2>
       <Alert color="bg-blue-200" border="border-blue-400">
       <p>A simple Primary Alert </p>
       </Alert>
       <Alert color="bg-gray-300" border="border-gray-500">
       <p>A simple Secondary Alert </p>
       </Alert>
       <Alert color="bg-green-300" border="border-green-500">
       <p>A simple Sucess Alert </p>
       </Alert>
       <Alert color="bg-red-300" border="border-red-500">
       <p>A simple danger Alert </p>
       </Alert>
       <Alert color="bg-yellow-200" border="border-yellow-400">
       <p>A simple Warning Alert </p>
       </Alert>
       <Alert color="bg-sky-200" border="border-sky-400">
       <p>A simple Info Alert </p>
       </Alert>
       <Alert color="bg-gray-100" border="border-gray-300">
       <p>A simple light Alert </p>
       </Alert>
       <Alert color="bg-gray-400" border="border-gray-600">
       <p>A simple dark Alert </p>
       </Alert>
    </div>
  )
}

export default AlertPage