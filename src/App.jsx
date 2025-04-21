import "./index.css";
import "./Components/Card.css";
import { AboutMe } from "./Sections/MainBody/About/AboutMe.jsx";
import { Header } from "./Sections/Head.jsx";
import { Projects } from "./Sections/MainBody/Projects/Projects.jsx";
import { Toolbox } from "./Sections/Toolbox.jsx";
import { Skills } from "./Sections/Skills.jsx";
//import { Updates } from "./Sections/Updates.jsx";
import { Footer } from "./Sections/Footer/FooterContent.jsx";

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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
