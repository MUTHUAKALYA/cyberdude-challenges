import { Outlet } from "react-router-dom";
import TheNavbar from "../Components/Navbar";
import TheFooter from "../Components/Footer";


const GuestLayout = () => {
    return (
        <div className="min-h-screen">
            <TheNavbar />
            <Outlet />
            <TheFooter/>
        </div>
    );
}

export default GuestLayout;