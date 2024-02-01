const Travel = () => {
  return (
    <div className="max-w-2xl mx-auto  bg-gray-100 px-7 py-10 rounded-lg ">
      <h1 className="font-black text-darkPrimary text-2xl text-center">
        A Weekend Trip To Coorg 
      </h1>
     
      <p className="text-justify py-5">
      Coorg is often called ‘The Scotland of India’ because of its misty
          landscape, great weather and lush green natural beauty. And Coorg is
          officially known as Kodagu and its often considered as the best hill
          station in Karnataka.
      </p>
      <div className="flex justify-center py-5">
        <img
          src="https://www.backpacksters.com/wp-content/uploads/2020/02/India-Coorg-Kushalnagar-Namdroling-Monastery-21.jpg"
          alt="Coorg image"
          className="w-[100%]"
        />
      </div>
     <div>
     <h3 className="text-black font-semibold text-xl my-5">What is the best time to visit Coorg?</h3>
        <p className="text-justify">
        Coorg weather is mostly pleasant and chilly throughout the year, except in the summer when the temperatures can soar during daytime. June to March are perfect for visiting and sightseeing in the towns.The usual Coorg temperature hovers between 15ºC to 33ºC depending on the time of the day and the season. 
        </p>
     </div>
     <div>
     <h3 className="text-black font-semibold text-xl my-5">1) Road trip through the Western Ghats</h3>
        <p className="text-justify">
        Consider driving to Coorg either by car or bike, because the roads pass through very scenic spots. The Nagarhole National Park and Bandipur Forest are the best wildlife parks where you can get lucky to see tigers and elephants. 
        </p>
     </div>
      
    </div>
  );
};
export default Travel;
