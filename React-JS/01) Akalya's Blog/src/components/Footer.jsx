import { Link } from "react-router-dom"
const Footer = ()=>{
    return(
        <>
        <footer className="bg-lightSecondary">
            <section className="flex justify-between py-5 px-10 bg-darkPrimary text-white">
                <h3 className="font-bold text-xl">Akalya Blogs</h3>
                <div>
                    <ul className="flex gap-x-8 font-semibold">
                        <li><Link to="/" className="hover:text-lightSecondary">Home</Link></li>
                        <li><Link to="/blogs" className="hover:text-lightSecondary">Blogs</Link></li>
                        {/* <li><Link to="/about" className="hover:text-lightSecondary">About</Link></li> */}
                        <li><a href="https://github.com/MUTHUAKALYA" className="hover:text-lightSecondary" title="Contact Me" target="_blank">Contact</a></li>
                    </ul>
                </div>
            </section>
            {/* <section className="flex justify-between py-5 px-10 bg-darkPrimary">
                <span>Copyright &copy; - Muthu Akalya A - All Rights Reserved</span>
                <div className="flex gap-x-5">
                    <span>Terms Of Service</span>
                    <span>Privacy Policy</span>
                </div>
            </section> */}
        </footer>
        </>
    )
}
export default Footer;