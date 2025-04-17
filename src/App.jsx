import "./index.css"
import "./Sections/Main/About/AboutMe.jsx"
import { AboutMe } from "./Sections/Main/About/AboutMe.jsx"


export const App = () => {
  console.log("App.jsx");
  return (
    <section>
      <AboutMe/>
    </section>
  );
}
