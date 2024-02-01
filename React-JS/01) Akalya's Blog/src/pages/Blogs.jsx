import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="max-w-2xl mx-auto  bg-gray-100 px-7 py-10 rounded-lg h-fit">
      <h1 className="font-black text-lightPrimary text-2xl mb-5 text-justify">
        My Blogs
      </h1>
      {/* <p className="text-justify my-5">
        Here , you can find all the blogs about food , fitness, Beauty & more .
      </p> */}
      <ul className="flex flex-col gap-y-2">
        <ol> <Link to="/Travel" className="hover:text-darkPrimary">1) A Weekend Trip To Coorg </Link></ol>
        <ol><Link to="/Fitness" className="hover:text-darkPrimary">2) Fueling Your Body Right: A Guide to Balanced Food Habits ?</Link></ol>
        <ol><Link t0="/Food" className="hover:text-darkPrimary">3) Slimming Down with Pilates: A Gentle Path to Weight Loss</Link></ol>
      </ul>
      
    </div>
  );
};
export default Blogs;
