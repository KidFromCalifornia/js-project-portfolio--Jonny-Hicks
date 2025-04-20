import "./index.css";
import "./Components/Card.css";
import { AboutMe } from "./Sections/AboutMe.jsx";
import { Header } from "./Sections/Head.jsx";
import { Projects } from "./Sections/Projects.jsx";
import { Toolbox } from "./Sections/Toolbox.jsx";
import { Skills } from "./Sections/Skills.jsx";
import { Updates } from "./Sections/Updates.jsx";
import { Footer } from "./Sections/FooterContent.jsx";

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
