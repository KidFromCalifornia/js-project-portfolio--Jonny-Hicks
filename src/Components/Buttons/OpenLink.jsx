import styled from "styled-components";

const LinkStyle = styled.a`
  background: ${(props) =>
    props.$variant === "Demo" ? "var(--color-accent)" : "var(--color-neutral)"};
  color: ${(props) =>
    props.$variant === "Demo"
      ? "var(--color-secondary)"
      : "var(--color-primary)"};
  border: solid 2px
    ${(props) =>
      props.$variant === "Demo"
        ? "var(--color-accent)"
        : "var(--color-neutral)"};
  border-radius: 0.8rem;
  box-shadow: var(--shadow);
  cursor: pointer;
  font-family: var(--a-font);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  text-align: center;

  &:hover {
    background: ${(props) =>
      props.$variant === "Demo"
        ? "var(--color-neutral)"
        : "var(--color-accent)"};
    color: ${(props) =>
      props.$variant === "Demo"
        ? "var(--color-secondary)"
        : "var(--color-secondary)"};
    border: solid 2px
      ${(props) =>
        props.$variant === "Demo"
          ? "var(--color-accent)"
          : "var(--color-accent)"};
  }
`;

export const OpenLink = ({ url, buttonText }) => {
  return (
    <LinkStyle
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      $variant={buttonText}
    >
      {buttonText}
    </LinkStyle>
  );
};
