import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Images from "./components/Images/Images";
import Videos from "./components/Videos/Videos";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";


import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
const App = () => {
  const design = (
    
       <BrowserRouter>
        <Navbar />
        <div className = "page">
          <div className = "container">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/images" element={<Images />} />
                <Route exact path="/videos" element={<Videos />} />
                <Route exact path="/about-us" element={<About />} />
                <Route exact path="/contact-us" element={<Contact />} />
              </Routes>
          </div>
        </div>
        <Footer/>
       </BrowserRouter>
  );
  return design;
}

export default App;