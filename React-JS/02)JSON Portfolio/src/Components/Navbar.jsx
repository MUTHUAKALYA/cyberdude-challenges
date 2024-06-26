import { Link } from "react-router-dom";
import data from "../data/myDetails.json";

const TheNavbar = () => {
    return <div className="bg-darkPrimary p-2  sm:px-10 sm:py-5 flex items-center justify-between">
        <h4 className="font-semibold sm:text-xl text-sm text-white">{data[0].FullName}</h4>
        <ul className="flex space-x-8 font-semibold text-lg">
            <li className="text-white sm:text-base text-sm hover:text-slate-400"><Link to={'./'}>Home</Link></li>
            {/* <li className="text-white sm:text-base text-sm hover:text-slate-400"><Link to={"./about"}>About</Link></li> */}
            <li className="text-white sm:text-base text-sm hover:text-slate-400" ><a href="https://github.com/MUTHUAKALYA" target="blank">Contact</a></li>
        </ul>
    </div>
}

export default TheNavbar