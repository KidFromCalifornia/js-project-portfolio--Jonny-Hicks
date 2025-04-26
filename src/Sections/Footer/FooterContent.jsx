import { FooterBackground } from "../../Components/FooterBackground";
import { Contacts } from "../../Components/ContactDetails";
import styled from "styled-components";

const FooterContent = styled.div`
  position: relative;
  background-color: var(--shadow-color);
  z-index: 1;
  height: 4rem;
  padding: 0 2rem;
  width: 100dvw;
  display: block;
  bottom: 0;
`;

const Background = styled.div`
  display: block;
  z-index: 1;
  transform: scale(25%);
  line-height: 3rem;

  @media (max-width: 720px) {
    transform: scale(10%);
    line-height: 1rem;
  }

  @media (min-width: 1010px) {
    transform: none;
    line-height: normal;
  }
`;

const FooterForeground = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 2rem;
  right: 2rem;

  @media (max-width: 720px) {
  }
  @media (min-width: 1010px) {
    bottom: 7rem;
    right: 20rem;
  }
`;

export const Footer = () => {
  return (
    <FooterContent id="contact">
      <FooterForeground>
        <Contacts />
      </FooterForeground>
      <Background>
        <FooterBackground />
      </Background>
    </FooterContent>
  );
};
