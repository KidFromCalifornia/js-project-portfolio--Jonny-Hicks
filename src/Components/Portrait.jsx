import photo from "../assets/img/Jhicks-PP.png";
import "./Portrait.css";

export const Portrait = () => {
  return (
    <div className="portrait">
      <img src={photo} alt="Portrait of Jonny Hicks" />
      <span className="circleBehind"></span>
    </div>
  );
};
