import { FooterBackground } from "../../Components/FooterBackground";
import { Contacts } from "../../Components/ContactDetails";
import styled from "styled-components";

const FooterContent = styled.div`
  position: relative;
  background-color: var(--shadow-color);
`;
const Background = styled.div`
  z-index: 0;
`;
const FooterForeground = styled.div`
  z-index: 1;
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
