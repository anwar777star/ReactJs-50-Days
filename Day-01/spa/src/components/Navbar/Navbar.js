import "./Navbar.css";
import myphoto from "./logo192.png";  
import { BrowserRouter, Link } from "react-router-dom";

const Navbar = () => {
    const design = (
        <ul>
            <li><Link to="/"><img src= {myphoto} width="40" /></Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="images">Images</Link></li>
            <li><Link to="videos">Videos</Link></li>
            <li><Link to="about-us">About Us</Link></li>
            <li><Link to="contact-us">Contact Us</Link></li>

        </ul>
    );

    return design;
}



export default Navbar;