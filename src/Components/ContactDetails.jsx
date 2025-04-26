import { ProfileLinks } from "./ProfileLinks/ProfileLinks";
import styled from "styled-components";

const ContactContainer = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  text-align: left;
`;

const ContactH2 = styled.h2`
  color: var(--color-accent);
  font-size: 1rem;
  text-shadow: var(--shadow);
  margin: 0; // Moved from inline style

  @media (max-width: 720px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1010px) {
    font-size: 2rem;
  }
`;

export const Contacts = () => {
  return (
    <>
      <ContactContainer className="footer-contacts">
        <li>
          <ContactH2>Jonny Hicks</ContactH2>
        </li>
        <li>
          <h3>+46 76 085 08 54</h3>
        </li>
        <li>
          <h4>hello.jonnyhicks@gmail.com</h4>
        </li>
        <ProfileLinks />
      </ContactContainer>
    </>
  );
};
