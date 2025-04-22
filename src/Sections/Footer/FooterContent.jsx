import { FooterBackground } from "../../Components/FooterBackground";
import { Contacts } from "../../Components/ContactDetails";
import styled from "styled-components";

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;
const Background = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 4;
`;
const FooterForeground = styled.div`
  grid-column: 2 /4;
  grid-row: 3/ 4;
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
