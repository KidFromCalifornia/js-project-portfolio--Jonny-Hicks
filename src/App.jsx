import "./index.css";

import { AboutMe } from "./Sections/MainBody/About/AboutMe.jsx";
import { Header } from "./Sections/Header/Head.jsx";
import { Projects } from "./Sections/MainBody/Projects/Projects.jsx";
import { ToolkitSection } from "./Sections/Toolkit.jsx";

import { Skills } from "./Sections/Skills.jsx";
import { Footer } from "./Sections/Footer/FooterContent.jsx";
import { Updates } from "./Sections/MainBody/Updates/Updates.jsx";
import ScrollAnimation from "./Components/animation.jsx";

export const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <ToolkitSection />
        <Updates />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

new ScrollAnimation(".animate");
