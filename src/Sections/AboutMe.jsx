import "./AboutMe.css";
import { Portrait } from "../Components/Portrait";
import { ButtonLinks } from "../Components/ButtonLinks";

export const AboutMe = () => {
  return (
    <div id="about-me">
      <div className="about-text">
        <h1>
          Jonny <br /> Hicks
        </h1>
        <h2>I Am a Web Developer</h2>
        <p>Some Text</p>
        <ButtonLinks />
      </div>

      <div className="portrait">
        <Portrait />
      </div>
    </div>
  );
};
