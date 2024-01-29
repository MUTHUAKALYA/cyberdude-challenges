import Categories from "../components/Categories";
import Search from "../components/Search";
import Topposts from "../components/Topposts";
import Cards from "../components/cards";


const Homepage = () => {
  return (
    <div className="flex flex-wrap max-w-7xl  my-6  mx-auto ">
      
        <div className="w-2/5 flex flex-col gap-y-4 items-center">
          <Search/>
         <Categories/>
         <Topposts/>
         
        </div>
        <div className="w-3/5 flex gap-x-5 ">
          <Cards />
          
        </div>
      
    </div>
  );
};
export default Homepage;
