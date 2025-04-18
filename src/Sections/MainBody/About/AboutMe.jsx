import Portrait from "../../../Components/Portrait/Portrait";
import "./AboutMe.css";
import { ButtonLinks } from "../../../Components/ButtonLinks/ButtonLinks";


export const AboutMe = () => {
  return (
	<div className="about-me">

	  <div className="about-text">
		  <h1>Jonny Hicks</h1>
		  <h2>I Am a Web Developer</h2>
		  <p>Some Text</p>
      <ButtonLinks/>
	  </div>

	  <div className="portrait" >
		  <Portrait/>
	  </div>

	</div>
  );
};

