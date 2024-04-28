import React, { useState } from "react";

const Card = (props) => {
  const { details } = props;
  const [count, setCount] = useState(0);

  //  const handleAddition = details.map((detail)=>{
  //   const handleReduce = () => {
  //     setCount(count > 0 ? count - 1 : count);
  //   }

  //  })

  // const handleSubtraction = (index)=>{
  //   const updateCount = details.map((detail)=>{
  //     detail.id === index ? count -1 : count
  //   })
  //   setCount(updateCount)
  // }

  // const handleReduce = (id,index) => {
  //   console.log("button clicked")
  //   console.log(id,index)
  //   if(index === id){
  //     setCount(count > 0 ? count - 1 : count)
  //     console.log("validation passed")
  //   }else {
  //     console.log("validation failed")
  //   }

  //    }

  const handleReduce = () => {
    setCount(count > 0 ? count - 1 : count);
  };
  const handleAdd = () => {
    setCount(count + 1);
  };

  // const handleAddition = (index)=>{
  //  const testing = details.map((detail)=>{
  //   if(detail.id === index+1){
  //     console.log("value matched")
  //     setCount(count+1)
  //   }

  //  })
  // }

  return (
    <>
      {details.map((info, index) => {
        return (
          <section
            className="bg-coconutMilk m-10  py-10 rounded-md grid grid-cols-8 justify-center justify-items-center items-center max-w-6xl gap-x-3"
            key={info.id}
          >
            <img
              src={info.image}
              alt={`${info.productName} image`}
              className="w-[200px] h-[200px] col-span-2"
            />
            <div className="flex flex-col w-[full]  col-span-2">
              <p className="font-semibold">{info.productName}</p>
              <span className="text-sm font-normal">
                {info.productDescription}
              </span>
              <span>
                <strong>Color : </strong>
                {info.color}
              </span>
            </div>
            <span>₹ {info.basePrice}</span>
            <div className="space-x-3 border border-gray-400 px-5  py-1 rounded-md">
              <button onClick={() => handleReduce(info.id, index + 1)}>
                -
              </button>
              <span>{count}</span>
              <button onClick={() => handleAdd(info.id)}>+</button>
            </div>
            <span>₹ {count * info.basePrice}</span>
            <button className="bg-sepiaRose px-5 py-2 rounded-md text-sm text-white hover:text-black hover:bg-opacity-80">
              Delete
            </button>
          </section>
        );
      })}
    </>
  );
};

export default Card;
