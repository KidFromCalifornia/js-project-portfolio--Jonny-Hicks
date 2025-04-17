import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./ButtonLinks.css";
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const ButtonLinks = () => {
  return (
    <ul className="button-links">
      <li>
        <a href="https://github.com/KidFromCalifornia" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
      </li>
      <li>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
      </li>
      
    </ul>
  );
};