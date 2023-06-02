import "./Navbar.css";
import myphoto from "./logo192.png";  

const Navbar = () => {
    const design = (
        <ul>
            <li><a href="/"><img src= {myphoto} width="40" /></a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/images">Images</a></li>
            <li><a href="/videos">Videos</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>

        </ul>
    );

    return design;
}



export default Navbar;