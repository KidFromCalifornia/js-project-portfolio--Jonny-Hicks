import "./index.css"
import "./Components/Card.css"
import "./Data/projects.json"
import { AboutMe } from "./Sections/AboutMe.jsx"
import { Header } from "./Sections/Head.jsx"
import { Projects } from "./Sections/Projects.jsx"



export const App = () => {
  console.log("App.jsx");
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <AboutMe />
      </section>
     <section>
        <Projects />
      </section>
    </>
  );
};