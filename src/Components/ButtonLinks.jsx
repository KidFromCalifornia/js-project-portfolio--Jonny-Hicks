
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
        <a href="www.linkedin.com/in/hellojonnyhicks" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/thekidfromcalifornia/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
      </li>
      
    </ul>
  );
};