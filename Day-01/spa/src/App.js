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
const App = () => {
  const design = (
    <div class = "page">
      <div class = "container">
       <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/images" element={<Images />} />
          <Route exact path="/videos" element={<Videos />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/contact-us" element={<Contact />} />
        </Routes>
       </BrowserRouter>

      </div>
    </div>
  );
  return design;
}

export default App;