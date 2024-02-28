import { Link } from "react-router-dom"

const Categories =  ()=>{
    return(
        
           <div className="bg-darkSecondary  p-10  rounded-lg">
            <h5 className="text-darkPrimary font-extrabold text-xl pb-5">Categories</h5>
             <ul className="space-y-2 text-gray-500">
               <Link to="/Travel" className="hover:text-gray-950"> <li>Travel </li></Link>
                <hr className="border border-1 border-gray-200"/>
                <Link to="/Food" className="hover:text-gray-950"><li>Food</li></Link>
                <hr className="border border-1 border-gray-200"/>
                <Link to="/Fitness" className="hover:text-gray-950"><li>Fitness</li></Link>
                <hr className="border border-1 border-gray-200"/>
               <Link className="hover:text-gray-950"> <li>Beauty</li></Link>
                <hr className="border border-1 border-gray-200"/>
            </ul>
        
           </div>
    )
}
export default Categories