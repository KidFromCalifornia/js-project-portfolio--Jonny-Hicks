import styled from "styled-components";
import { Contacts } from "../../Components/ContactDetails";

const FooterContainer = styled.footer`
  position: relative;
  background-color: var(--shadow-color);
  color: var(--color-primary);
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem;
  }
`;

const FooterBackgroundText = styled.div`
  font-family: var(--font-Header);
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.2;
  color: var(--color-primary);
  opacity: 0.1;
  font-size: 5rem;

  @media (min-width: 768px) {
    font-size: 8rem;
  }

  @media (min-width: 1010px) {
    font-size: 12rem;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterBackgroundText>Let's Chat</FooterBackgroundText>
      <Contacts />
    </FooterContainer>
  );
};
