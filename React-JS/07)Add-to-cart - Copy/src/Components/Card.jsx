import React, { useState } from "react";

const Card = () => {
  const basePrice = 20.0;
  const [count, setCount] = useState(0);

  return (
    <div className="flex max-w-5xl">
     <div>
     <section className="bg-coconutMilk m-10 px-5 py-5 rounded-md grid grid-cols-6 justify-center justify-items-center items-center max-w-3xl">
        <img
          src="https://www.ikonicworld.com/cdn/shop/files/1_1ba746b6-37a3-4482-b0ee-58fe328f7890.jpg?v=1699100822&width=1080"
          alt="hair-dryer images"
          className="w-[150px] h-[150px] object-contain"
        />
        <span>Hair Dryer</span>
        <span>$ {basePrice}</span>
        <div className="space-x-3 border border-gray-400 px-5  py-1 rounded-md">
          <button
            onClick={() => {
              setCount(count > 0 ? count - 1 : count);
            }}
          >
            -
          </button>
          <span>{count}</span>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
        <span>$ {count * basePrice}</span>
        <button className="bg-sepiaRose px-5 py-2 rounded-md text-sm text-white hover:text-black hover:bg-opacity-80">
          Delete
        </button>
      </section>
      {/* second card */}
      <section className="bg-coconutMilk m-10 px-5 py-5 rounded-md grid grid-cols-6 justify-center justify-items-center items-center max-w-3xl">
        <img
          src="https://www.ikonicworld.com/cdn/shop/files/1_1ba746b6-37a3-4482-b0ee-58fe328f7890.jpg?v=1699100822&width=1080"
          alt="hair-dryer images"
          className="w-[150px] h-[150px] object-contain"
        />
        <span>Hair Dryer</span>
        <span>$ {basePrice}</span>
        <div className="space-x-3 border border-gray-400 px-5  py-1 rounded-md">
          <button
            onClick={() => {
              setCount(count > 0 ? count - 1 : count);
            }}
          >
            -
          </button>
          <span>{count}</span>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
        <span>$ {count * basePrice}</span>
        <button className="bg-sepiaRose px-5 py-2 rounded-md text-sm text-white hover:text-black hover:bg-opacity-80">
          Delete
        </button>
      </section>
     </div>

      <section className="bg-eiderDown flex max-w-md h-[200px]">
        <h1 className="text-xl font-semibold">Continue Shooping</h1>
      </section>
    </div>
  );
};

export default Card;
