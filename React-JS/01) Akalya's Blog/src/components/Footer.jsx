import { Link } from "react-router-dom"
const Footer = ()=>{
    return(
        <>
        <footer className="bg-lightSecondary">
            <section className="flex justify-between py-5 px-10 bg-darkPrimary text-white">
                <h3>Akalya Blogs</h3>
                <div>
                    <ul className="flex gap-x-5">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><a href="https://github.com/MUTHUAKALYA" title="Contact Me" target="_blank">Contact</a></li>
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