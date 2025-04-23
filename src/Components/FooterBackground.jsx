import styled from "styled-components";

const FooterTextBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  overflow: hidden;
  background-color: var(--color-secondary);
`;
const FooterText = styled.div`
  color: var(--color-primary);
  font-size: 20rem;
  height: 100%;
  font-weight: 900;
  font-family: var(--font-body);
  overflow: hidden;
  position: relative;
`;

export const FooterBackground = () => {
  return (
    <FooterTextBox>
      <FooterText style={{ gridRow: 2 / 4, gridColumn: 2 / 4 }}>
        lets
      </FooterText>
      <FooterText style={{ gridColumn: 1 / 3, gridRow: 2 / 3 }}>
        chat
      </FooterText>
    </FooterTextBox>
  );
};
