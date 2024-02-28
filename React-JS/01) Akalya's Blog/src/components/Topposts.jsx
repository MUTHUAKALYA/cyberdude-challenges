import { Link } from "react-router-dom";

const Topposts = () => {
  return (
    <div className="bg-darkSecondary  px-10 py-10 rounded-lg">
      <h5 className="text-darkPrimary font-extrabold text-xl pb-5">
        Top Posts
      </h5>
      <div className="flex flex-col gap-y-4">
        <Link to="/Travel" className="flex gap-x-3 items-start">
          <span className="font-extrabold text-xl text-gray-600">1</span>
          <p className="text-gray-500 font-semibold hover:underline hover:text-gray-900">
          A Weekend Trip To Coorg 
          </p>
        </Link>

        <Link to="/Food" className="flex gap-x-3 items-start">
          <span className="font-extrabold text-xl text-gray-600">2</span>
          <p className="text-gray-500 font-semibold text-justify hover:underline hover:text-gray-900">
          Fueling Your Body Right: A Guide to Balanced Food Habits ?
          </p>
        </Link>

        <Link to="/Fitness" className="flex gap-x-3 items-start">
          <span className="font-extrabold text-xl text-gray-600">3</span>
          <p className="text-gray-500 font-semibold text-justify hover:underline hover:text-gray-900">
          Slimming Down with Pilates: A Gentle Path to Weight Loss
          </p>
        </Link>
       
      </div>
    </div>
  );
};
export default Topposts;
