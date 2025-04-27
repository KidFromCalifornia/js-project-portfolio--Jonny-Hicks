import "./index.css";

import { AboutMe } from "./Sections/MainBody/About/AboutMe.jsx";
import { Header } from "./Sections/Header/Head.jsx";
import { Projects } from "./Sections/MainBody/Projects/Projects.jsx";
import { ToolkitSection } from "./Sections/MainBody/Tools/Toolkit.jsx";
import { Skills } from "./Sections/MainBody/Skills/Skills.jsx";
import { Footer } from "./Sections/Footer/FooterContent.jsx";
import { Updates } from "./Sections/MainBody/Updates/Updates.jsx";

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

      <Footer />
    </>
  );
};
