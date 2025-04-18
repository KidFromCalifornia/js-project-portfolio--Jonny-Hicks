import "./index.css"
import "./Components/Card.css"
import { AboutMe } from "./Sections/MainBody/About/AboutMe.jsx"
import { Header } from "./Sections/Header/Head.jsx"

import "./Data/projects.json"




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
        <Card />
      </section>
    </>
  );
};