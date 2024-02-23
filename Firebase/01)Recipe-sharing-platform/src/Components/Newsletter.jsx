const Newsletter = () => {
  return (
    // <div className='bg-orange-100  px-10 py-5 mb-20  grid grid-cols-4 items-center justify-center' >
    //   <img src="https://www.simplyrecipes.com/thmb/DJp2s4GDwu1W-ZZKAD_uyYQMzew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-A-A-guide-cooking-terms-11451db934b94e66852c335e5d240539.jpg" alt="" className='w-[540px] h-[540px] '/>
    //     <div className='bg-white px-10 py-5 text-center space-y-2'>
    //         <h1 className='text-xl font-black '>Ready to cook?</h1>
    //         <p>Get our latest recipes and expert tips right in your inbox</p>
    //        <form action="" className='space-x-3 space-y-2'>
    //        <input type="text" placeholder='Enter your email' className='bg-gray-50 px-5 py-1 outline-none rounded-md text-sm'/>
    //         <button className='bg-orange-500 px-2 py-1 rounded-md text-white text-sm'>Sign-Up</button>
    //        </form>
    //     </div>
    // </div>

    //bg-newsletter-image p-10 h-[500px]
    <div className="  flex justify-center items-center  bg-cover">
      <div className="bg-gray-50 px-10 py-10 max-w-2xl text-center space-y-2  rounded-xl box-shawdow-2xl my-20">
        <h1 className="text-xl font-black ">Ready to cook?</h1>
        <p>Get our latest recipes and expert tips right in your inbox</p>
        <form
          action=""
          className="space-x-3  flex flex-row items-center justify-center"
        >
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-gray-100 px-5 py-1 outline-none rounded-md text-sm w-[75%]"
          />
          <button className="bg-orange-200 px-4 py-1 rounded-md text-black text-sm font-semibold w-[25%]">
            Sign-Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
