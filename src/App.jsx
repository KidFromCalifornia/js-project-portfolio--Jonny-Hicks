import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/header/Head";
import Footer from "./sections/footer/Footer";
import About from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <Router>
    <ScrollToTop />
    <Navbar />
    <main style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
