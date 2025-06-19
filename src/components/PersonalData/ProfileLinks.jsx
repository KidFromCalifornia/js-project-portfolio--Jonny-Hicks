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
  gap: 0.5rem;
`;

const IconList = styled.li`
  margin: 0 0.5rem;
  text-decoration: none;
`;

const IconLinkA = styled.a`
  font-size: 2rem;
  font-weight: 600;

  svg {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    filter: drop-shadow(var(--shadow));

    path {
      font-size: 2rem; /* Added valid unit 'rem' */
      transition: all 0.3s ease-in-out;
      filter: drop-shadow(var(--shadow));
      fill: ${(props) =>
        props.$variant === "white"
          ? "var(--color-neutral)"
          : "var(--color-accent)"};
    }

    &:hover path {
      fill: ${(props) =>
        props.$variant === "white"
          ? "var(--color-accent)"
          : "var(--color-neutral)"};
      cursor: pointer;
      transform: scale(1.05);
    }
  }
`;

export const ProfileLinks = ({ $variant }) => {
  return (
    <IconLinksParent className="profile-links">
      <IconList>
        <IconLinkA
          href="https://github.com/KidFromCalifornia"
          target="_blank"
          rel="noopener noreferrer"
          $variant={$variant}
          aria-label="Visit my GitHub profile"
        >
          <FontAwesomeIcon icon={faGithub} />
        </IconLinkA>
      </IconList>
      <IconList>
        <IconLinkA
          href="https://www.linkedin.com/in/hellojonnyhicks"
          target="_blank"
          rel="noopener noreferrer"
          $variant={$variant}
          aria-label="Visit my LinkedIn profile"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </IconLinkA>
      </IconList>
      <IconList>
        <IconLinkA
          href="https://www.instagram.com/thekidfromcalifornia/"
          target="_blank"
          rel="noopener noreferrer"
          $variant={$variant}
          aria-label="Visit my Instagram profile"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </IconLinkA>
      </IconList>
    </IconLinksParent>
  );
};
