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
  font-size: 2rem;
  text-shadow: var(--shadow);
`;
export const Contacts = () => {
  return (
    <>
      <ContactContainer className="footer-contacts">
        <li>
          <ContactH2 style={{ margin: 0 }}>Jonny Hicks </ContactH2>
        </li>
        <li>
          <h3>+46 76 085 08 54 </h3>
        </li>
        <li>
          <h4>hello.jonnyhicks@gmail.com</h4>
        </li>
        <ProfileLinks />
      </ContactContainer>
    </>
  );
};
