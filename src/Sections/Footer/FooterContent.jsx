import styled from "styled-components";
import { Contacts } from "../../Components/PersonalData/ContactDetails";

const FooterContainer = styled.footer`
  position: relative;
  background-color: var(--shadow-color);
  color: var(--color-primary);
  width: 100dvw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem;
  }
`;

const FooterBackgroundText = styled.div`
  position: relative;
  font-family: var(--font-Header);
  font-weight: 900;
  line-height: 1.2;
  color: var(--color-primary);
  opacity: 0.5;
  font-size: 4rem;
  z-index: 0;
  text-align: center;

  @media (min-width: 468px) {
    font-size: 10rem;
  }

  @media (min-width: 1010px) {
    font-size: 10rem;
  }
`;

const ContactsWrapper = styled.div`
  position: absolute;
  bottom: 15%;

  z-index: 1;

  @media (min-width: 768px) {
    bottom: 25%; /* Center vertically */
    right: 5%;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterBackgroundText>Lets Chat</FooterBackgroundText>
      <ContactsWrapper>
        <Contacts />
      </ContactsWrapper>
    </FooterContainer>
  );
};
