import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GithubButton } from "../Buttons/GithubButton";
import { NetlifyButton } from "../Buttons/NetlifyButton";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUniversalAccess,
  faFilm,
  faUtensils,
  faCloudSunRain,
} from "@fortawesome/free-solid-svg-icons";

// Preload icons into Font Awesome library
library.add(faUniversalAccess, faFilm, faUtensils, faCloudSunRain);

export const Card = ({ icon, name, description, netlify, github }) => {
  return (
    <div className="card">
      <FontAwesomeIcon icon={["fas", icon]} size="2x" />
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
