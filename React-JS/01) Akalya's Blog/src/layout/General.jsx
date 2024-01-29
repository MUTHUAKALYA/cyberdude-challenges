import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Categories from "../components/Categories"


const General = ()=>{
    return (
        <div>
            <Navbar/>
            
            <Outlet/>
            
            
        </div>
    )
}
export default General