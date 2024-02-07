import React from 'react'

const Button = ({color,buttonName}) => {
  return (
    <>
    <button type="button" className={`${color} px-5 py-2 rounded text-gray-200 mx-3 my-2 w-[100px]`}>{buttonName}</button>
    </>
  )
}

export default Button