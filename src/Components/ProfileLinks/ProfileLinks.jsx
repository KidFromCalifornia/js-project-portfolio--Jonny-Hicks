import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import styled from "styled-components";

const IconLinksParent = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style-type: none;
`;

const IconList = styled.li`
  margin: 0 0.5rem;
  text-decoration: none;
`;
const IconLinkA = styled.a`
  font-size: 1rem;
  font-weight: 600;
`;

export const ProfileLinks = () => {
  return (
    <IconLinksParent className="profile-links">
      <IconList>
        <IconLinkA
          href="https://github.com/KidFromCalifornia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </IconLinkA>
      </IconList>
      <IconList>
        <IconLinkA
          href="www.linkedin.com/in/hellojonnyhicks"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </IconLinkA>
      </IconList>
      <IconList>
        <IconLinkA
          href="https://www.instagram.com/thekidfromcalifornia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </IconLinkA>
      </IconList>
    </IconLinksParent>
  );
};
