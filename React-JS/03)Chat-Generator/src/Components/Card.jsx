import React, { useState } from 'react'
import Input from './Input'
import Preview from './Preview'

const Card = () => {
    const [fullname,setName] = useState("Name")
   const handleName=(e)=>{
    console.log(e.target.value)
    setName(e.target.value)
   }
   const [message,setMessage] = useState("Message")
   const handleMessage = (e)=>{
    console.log(e.target.value)
    setMessage(e.target.value)
   }
  return (
    <div className=' space-x-4 m-20 grid grid-cols-2 bg-slate-500 shawdow box-shawdow-2xl backdrop-blur rounded-xl'>
         <div>
      <div className="bg-gray-200 max-w-lg p-10  space-y-5 rounded-lg ">
        {/* clock input field */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="clock" className="font-semibold">
            Clock
          </label>
          <input
            type="time"
            id="clock"
            placeholder="Enter Time"
            className="px-3 py-2 rounded-lg"
          />
        </div>
        {/* Battery percentage input field */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="battery" className="font-semibold">
            Battery Percentage
          </label>
          <input
            type="range"
            placeholder="Enter Battery Percentage"
            id="battery"
          />
        </div>
        {/* Date input field */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="date" className="font-semibold">
            Date
          </label>
          <input
            type="date"
            id="date"
            placeholder="Enter Time"
            className="px-3 py-2 rounded-lg"
          />
        </div>
        {/* direct message with */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="message_with" className="font-semibold">
            Direct Message With
          </label>
          <input
            type="text"
            id="message_with"
            placeholder="Enter name"
            className="px-3 py-2 rounded-lg outline-none"
            autoComplete="off"
            autoFocus
            onChange={handleName}
          />
        </div>
        {/* status */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="status" className="font-semibold">
            Status
          </label>
          <input
            type="text"
            id="status"
            placeholder="Enter status"
            className="px-3 py-2 rounded-lg outline-none "
            autoComplete="off"
            autoFocus
          />
        </div>
        {/* time */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="time" className="font-semibold">
            Time
          </label>
          <input
            type="text"
            id="time"
            placeholder="Enter Time"
            className="px-3 py-2 rounded-lg outline-none "
            autoComplete="off"
            autoFocus
          />
        </div>
        {/* Message */}
        {/* time */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="font-semibold">
            Message
          </label>
          <input
            type="text"
            id="time"
            placeholder="Enter Message"
            className="px-3 py-2 rounded-lg outline-none "
            autoComplete="off"
            autoFocus
            onChange={handleMessage}
          />

          <button className="bg-darkPrimary text-white font-semibold py-2 px-5 w-[50%] mt-2 hover:bg-black hover:font-bold">
            Add message
          </button>
        </div>
      </div>
    </div>


    {/* output card */}
    <div className='max-w-2xl rounded-lg '>
        {/* <img src="https://i.pinimg.com/originals/7d/0e/70/7d0e709fd2c2555e075ae8b49368fb74.jpg" alt="Whatsapp-doodle-image" className='max-h-screen w-[672px] object-cover'/> */}

        <div className='max-w-md  bg-gray-900 min-h-screen'>
        {/* header section of the screen */}
        <div className='text-white flex items-center justify-between px-5 py-3'>
            <span className='text-sm'>8:00 pm</span>
            <div className='flex gap-x-1 items-center justify-center'>
            <span className='text-xs'>4G</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z"/></svg>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M112 96v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8m112-16v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h168a8 8 0 0 0 8-8Zm40 8a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8"/></svg>
            </div>
        </div>
        <hr className='border border-gray-700'/>
        {/* chat header */}
        <div className='px-5 py-5 bg-gray-950 text-white flex gap-x-3'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m5.915 12.5l3.747 3.746q.14.14.15.344q.01.204-.15.364t-.354.16q-.195 0-.354-.16l-4.389-4.389q-.13-.13-.183-.267q-.053-.136-.053-.298t.053-.298q.053-.137.183-.267l4.389-4.389q.14-.14.344-.15q.204-.01.364.15t.16.354t-.16.354L5.915 11.5H19.5q.213 0 .357.143q.143.144.143.357t-.143.357q-.144.143-.357.143z"/></svg>
       <div className='flex flex-1 justify-between'>
       <div className='flex gap-x-3'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg" alt="unknown-person-image" className='w-[35px] h-[35px] object-cover rounded-full' />
            <div className='flex flex-col'>
                <span className='text-sm'>{fullname ? fullname : "Name" }</span>
                <span className='text-xs'>Online</span>
            </div>
        </div>
        <div className='flex gap-x-3 items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3.48 19V5h14v6.27l3.04-3.04v7.54l-3.04-3.04V19zm1-1h12V6h-12zm0 0V6z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8q-2.5-2.5-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 12c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"/></svg>
        </div>
       </div>
        </div>
        {/* chat body */}
     <div className='flex flex-col items-center justify-center my-3 space-y-2'>
     <span className='text-white text-xs bg-gray-800 px-5 py-2 rounded-full '>10 Feb 2024</span>
     <span className='w-[90%] text-xs bg-gray-800 px-5 py-2 text-justify rounded-full text-yellow-500'>Messages and calls are end-to-end encrypted. No one outside of this chat, not even whatsapp , can read or listen to them. Tap to learn more.</span>
    
     </div>
     {/* chat content */}
     <span className='text-white text-sm bg-gray-800 px-5 py-2 rounded-full mx-5'>{message ? message : "Type your Message"}</span>

        </div>
    </div>
    </div>
  )
}

export default Card