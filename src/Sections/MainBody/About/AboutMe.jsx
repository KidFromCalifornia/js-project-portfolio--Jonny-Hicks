import "./AboutMe.css";
import { Portrait } from "../../../Components/Portrait";
import { ButtonLinks } from "../../../Components/ButtonLinks";

export const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="about-text">
        <h1>
          Jonny <br /> Hicks
        </h1>
        <h2>I Am a Web Developer</h2>
        <p>
          I am a creative problem solver who has transitioned into web
          development, leveraging my background in customer service,
          hospitality, and retail. These roles have honed my attention to detail
          and strengthened my ability to understand and meet user needs.
          <br /> <br />
          Currently, I am refining my skills through the Technigo Web Developer
          Boot Camp, where I specialize in building accessible and responsive
          websites with modern technologies like React, JavaScript, and
          TypeScript.
        </p>
        <ButtonLinks />
      </div>

      <div className="portrait">
        <Portrait />
      </div>
    </section>
  );
};
