import "./index.css";
import { Header } from "./Sections/Header/Head";
import { AboutMe } from "./Sections/MainBody/About/AboutMe";
import { Skills } from "./Sections/MainBody/Skills/Skills";
import { Projects } from "./Sections/MainBody/Projects/Projects";
import { ToolkitSection } from "./Sections/MainBody/Tools/Toolkit";
import { Updates } from "./Sections/MainBody/Updates/Updates";
import { Footer } from "./Sections/Footer/FooterContent";

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
