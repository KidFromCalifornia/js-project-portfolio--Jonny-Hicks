import { ButtonLinks } from "./ButtonLinks/ButtonLinks";
import styled from "styled-components";
const ContactContainer = styled.ul`
  padding: 0;
  margin: 0;
  max-width: 20vw
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  text-align: left;
`;

export const Contacts = () => {
  return (
    <>
      <ContactContainer>
        <li>
          <h4>Jonny Hicks </h4>
        </li>
        <li>
          <h4>+46 76 085 08 54 </h4>
        </li>
        <li>
          <h4>hello.jonnyhicks@gmail.com</h4>
        </li>
      </ContactContainer>
      <ButtonLinks />
    </>
  );
};
