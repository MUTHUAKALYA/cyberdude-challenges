import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Categories from "../components/Categories"
import Footer from "../components/Footer"
import SideNav from "../components/SideNav"


const General = ()=>{
    return (
        <div>
            <Navbar/>
            
           <div className=" flex flex-col-reverse  md:flex-row   justify-center mx-auto  p-3 lg:p-10 space-x-3 lg:space-x-5">
           
            <SideNav/>
            <Outlet/>
           </div>
            <Footer/>
            
            
        </div>
    )
}
export default General