import { Link } from "react-router-dom"

const Navbar = ()=>{
    return (
        <div>
            <header className="bg-darkPrimary ">
                <nav className="flex flex-col sm:flex-row justify-center gap-y-5  items-center sm:justify-between text-lightSecondary  py-6 px-10 text-md font-semibold sm:font-bold">
                    <h1>Akalya Blogs</h1>
                    
                    <ul className="flex gap-x-5 sm:gap-x-10  ">
                        <li><Link to="/" className="hover:text-white" title="View - HomePage">Home</Link></li>
                        <li><Link to="/blogs" className="hover:text-lightSecondary" title="View - Blogs">Blogs</Link></li>
                        <li><Link to="/about" className="hover:text-lightSecondary" title="View-About">About</Link></li>
                        <li><a href="https://github.com/MUTHUAKALYA"className="hover:text-lightSecondary" title="View-Github" target="_blank">GitHub</a></li>
                    </ul>
                    
                    {/* <div className="flex gap-x-5 items-center">
                        <a href="" title="Gmail" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"/></svg></a>
                        <a href="" title="Instagram" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg></a>
                        <a href="" title="X" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"/></svg></a>
                    </div> */}
                </nav>
            </header>
        </div>
    )
}
export default Navbar