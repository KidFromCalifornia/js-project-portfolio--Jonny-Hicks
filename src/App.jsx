import "./index.css";

import { AboutMe } from "./Sections/MainBody/About/AboutMe.jsx";
import { Header } from "./Sections/Header/Head.jsx";
import { Projects } from "./Sections/MainBody/Projects/Projects.jsx";
import { Toolbox } from "./Sections/Toolbox.jsx";
import { Skills } from "./Sections/Skills.jsx";
import { Footer } from "./Sections/Footer/FooterContent.jsx";
import { Updates } from "./Sections/MainBody/Updates/Updates.jsx";

export const App = () => {
  console.log("App.jsx");
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Toolbox />
        <Updates />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
