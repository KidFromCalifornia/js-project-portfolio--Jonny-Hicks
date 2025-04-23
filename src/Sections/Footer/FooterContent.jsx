import { FooterBackground } from "../../Components/FooterBackground";
import { Contacts } from "../../Components/ContactDetails";
import styled from "styled-components";

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background-color: var(--color-secondary);
  height: min-content;
`;
const Background = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 3;
`;
const FooterForeground = styled.div`
  grid-column: 3 /3;
  grid-row: 2/ 3;
`;
export const Footer = () => {
  return (
    <FooterContent>
      <Background>
        <FooterBackground />
      </Background>
      <FooterForeground>
        <Contacts />
      </FooterForeground>
    </FooterContent>
  );
};
