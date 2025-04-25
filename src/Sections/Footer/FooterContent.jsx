import { FooterBackground } from "../../Components/FooterBackground";
import { Contacts } from "../../Components/ContactDetails";
import styled from "styled-components";

const FooterContent = styled.div`
  position: relative;
  background-color: var(--shadow-color);
  z-index: 0;
  height: 200;
  padding: 0 rem;
  box-sizing: border-box;
  width: fit-content;
`;
const Background = styled.div`
  z-index: 1;
`;
const FooterForeground = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 7rem;
  right: 20rem;
`;

export const Footer = () => {
  return (
    <FooterContent>
      <FooterForeground>
        <Contacts />
      </FooterForeground>
      <Background>
        <FooterBackground />
      </Background>
    </FooterContent>
  );
};
