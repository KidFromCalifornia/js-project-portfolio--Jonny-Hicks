import styled from "styled-components";

const FooterTextBox = styled.div`
  display: none;
  flex-direction: column;
  justify-content: stretch;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  align-self: start;
  text-align: left;
  line-height: 1rem;

  @media (min-width: 1010px) {
    display: flex;
  }
`;

const FooterText = styled.div`
  display: block;
  color: var(--color-primary);
  font-weight: 900;
  font-family: var(--font-Header);
  filter: url(#inset-shadow);
  text-transform: uppercase;
  box-sizing: border-box;
  line-height: normal;

  ${({ variant }) => {
    const styles = {
      start: `
          font-size: 10rem;
          align-self: start;
          text-align: left;
        `,
      end: `
          font-size: 20rem;
          align-self: end;
          text-align: right;
        `,
    };
    return styles[variant];
  }}

  @media (max-width: 720px) {
    display: none;
  }

  @media (min-width: 1010px) {
    transform: none;
    line-height: 12rem;
  }
`;

export const FooterBackground = () => {
  return (
    <FooterTextBox>
      <FooterText $variant="start">lets</FooterText>
      <FooterText $variant="end">chat</FooterText>
    </FooterTextBox>
  );
};
