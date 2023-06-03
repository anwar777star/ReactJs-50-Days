import Footer from "./cmp/Footer/Footer";
import Header from "./cmp/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./cmp/Home/Home";
import Blog from "./cmp/Blog/Blog";
import SoftwareEngneering from "./cmp/SoftwareEngneering/SoftwareEngneering";
import WebDevelopment from "./cmp/WebDevelopment/WebDevelopment";
import Robotics from "./cmp/Robotics/Robotics";

const App = () => {
  const design = (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/software-engineering" element={<SoftwareEngneering />} />
        <Route exact path="/web-development" element={<WebDevelopment />} />
        <Route exact path="/robotics" element={<Robotics />} />
      </Routes>
        
    <Header />
    <Footer />
    </Router>
    </>
  );
  return design;
}

export default App;