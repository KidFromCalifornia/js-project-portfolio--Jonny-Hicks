import styled from "styled-components";

const FooterTextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  flex-wrap: wrap;
`;
const FooterText = styled.div`
  color: var(--color-primary);
  height: 100%;
  width: 100%;
  font-weight: 900;
  font-family: var(--font-Header);
  filter: url(#inset-shadow);
  text-transform: uppercase;
  box-sizing: border-box;
  line-height: 1;

  transform: scale(25%);
  line-height: 3rem;

  @media (max-width: 720px) {
    display: none;
  }
  @media (min-width: 1010px) {
    transform: none;
    line-height: normal;
  }
`;

export const FooterBackground = () => {
  return (
    <FooterTextBox>
      <FooterText style={{ fontSize: "10rem", alignSelf: "left" }}>
        lets
      </FooterText>
      <FooterText
        style={{ fontSize: "20rem", alignSelf: "right", textAlign: "right" }}
      >
        chat
      </FooterText>
    </FooterTextBox>
  );
};
