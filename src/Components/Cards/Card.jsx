import "./Card.css";
import { GithubButton } from "../Buttons/GithubButton";
import { NetlifyButton } from "../Buttons/NetlifyButton";

export const Card = ({ icon, name, description, index, netlify, github }) => {
  return (
    <div key={index} className="card">
      <i className={icon}></i>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul className="card-buttons">
        <li className="netlify-button">
          <NetlifyButton url={netlify} />
        </li>
        <li className="github-button">
          <GithubButton url={github} />
        </li>
      </ul>
    </div>
  );
};
