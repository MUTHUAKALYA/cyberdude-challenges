import React, { useState } from "react";

const Input = () => {

    const [fullname,setName] = useState("name")
   const handleName=(e)=>{
    console.log(e.target.value)
    setName(e.target.value)
   }
  return (
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
          />

          <button className="bg-darkPrimary text-white font-semibold py-2 px-5 w-[50%] mt-2 hover:bg-black hover:font-bold">
            Add message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
