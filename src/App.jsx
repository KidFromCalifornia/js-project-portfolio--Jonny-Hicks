import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/header/Head";
import Footer from "./sections/footer/Footer";
import About from "./pages/About";
import Skills from "./pages//Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
