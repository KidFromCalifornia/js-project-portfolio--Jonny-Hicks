import "./Card.css";
import { GithubButton } from "./GithubButton";
import { NetlifyButton } from "./NetlifyButton";

export const Card = ({ icon, name, description, github, netlify }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="card-buttons">
        {netlify && <NetlifyButton url={netlify} />}
        {github && <GithubButton url={github} />}
      </div>
    </div>
  );
};
