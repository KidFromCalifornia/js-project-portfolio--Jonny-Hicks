import styled from "styled-components";

const FooterTextBox = styled.div`
  background-color: var(--color-secondary);
  width: 100dvw;
  height: fitcontent;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  flex-wrap: wrap;
  font-case: uppercase;
`;
const FooterText = styled.div`
  color: var(--color-primary);
  font-size: 18rem;
  height: 100%;
  text-transform: uppercase;
  font-weight: 900;
  font-family: var(--font-header);
`;
export const FooterBackground = () => {
  return (
    <FooterTextBox>
      <FooterText style={{ gridRow: "1 / 3", gridColumn: "1 / 3" }}>
        Lets
      </FooterText>
      <FooterText style={{ gridRow: "2 / 4", gridColumn: "2 / 4" }}>
        talk
      </FooterText>
    </FooterTextBox>
  );
};
