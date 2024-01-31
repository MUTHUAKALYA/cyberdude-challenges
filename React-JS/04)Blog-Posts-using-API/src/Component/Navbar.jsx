import { Link } from "react-router-dom"

const Navbar = ()=>{
    return (
        <div className="bg-Noir text-Almond p-5 flex justify-between font-bold">
        <h1 className="text-xl">Akalya Blogs</h1>
        <ul className="flex gap-x-8">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            
        </ul>
        </div>
    )
}

export default Navbar