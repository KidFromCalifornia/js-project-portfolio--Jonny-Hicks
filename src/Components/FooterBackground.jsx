import styled from "styled-components";

const FooterTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  width: 100%;

  box-sizing: border-box;
  padding: 0 2rem;
`;
const FooterText = styled.div`
  color: var(--color-primary);
  font-size: 10rem;
  height: 100%;
  width: 100%;
  font-weight: 900;
  font-family: var(--font-body);
  filter: url(#inset-shadow);
`;

export const FooterBackground = () => {
  return (
    <FooterTextBox>
      <FooterText style={{ textAlign: "left", alignSelf: "self-start" }}>
        lets
      </FooterText>
      <FooterText style={{ textAlign: "right", alignSelf: "self-end" }}>
        chat
      </FooterText>
    </FooterTextBox>
  );
};
