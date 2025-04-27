import { ProfileLinks } from "./ProfileLinks";
import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 2;

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const ContactHeading = styled.h2`
  font-size: 1.5rem;
  color: var(--color-accent);
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0;
  font-size: 1rem;

  li {
    margin-bottom: 0.5rem;
    font-family: var(--font-body);

    a {
      text-decoration: none;
      color: var(--color-accent);
      text-transform: uppercase;
      font-family: var(--font-body);
    }
    &:hover {
      color: var(--color-neutral);
      text-decoration: underline;
      transition: 0.3s;
      transform: scale(1.02);
    }
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Contacts = () => {
  return (
    <ContactContainer>
      <ContactHeading>Jonny Hicks</ContactHeading>
      <ContactDetails>
        <li>
          <a href="mailto:hello.jonnyhicks@gmail.com">
            hello.jonnyhicks@gmail.com
          </a>
        </li>
      </ContactDetails>
      <ProfileLinks />
    </ContactContainer>
  );
};
