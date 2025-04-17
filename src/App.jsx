import "./index.css"
import { AboutMe } from "./Sections/Main/About/AboutMe.jsx";
import { Header } from "./Sections/Header/Head.jsx"



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
    </>
  );
};