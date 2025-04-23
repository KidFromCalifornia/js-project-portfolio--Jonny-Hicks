import styled from "styled-components";

const LinkStyle = styled.a`
  background: var(--color-neutral);
  color: var(--color-primary);
  border: solid 2px var(--color-primary);
  border-radius: 1rem;
  box-shadow: var(--shadow);
  cursor: pointer;
  font-family: "IBM Plex Mono", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  text-align: center;

  &:hover {
    color: var(--color-secondary);
    border: solid 2px var(--color-accent);
  }
`;

/*.github {
  background: var(--color-accent);
  color: var(--font-color-primary);
  border: solid 2px var(--color-accent);

&:hover {
  background: var(--color-netral);
  color: var(--font-color-secondary);
  border: solid 2px var(--color-primary);
}
*/

export const OpenLink = ({ url, buttonText }) => {
  return (
    <LinkStyle href={url} target="_blank" rel="noopener noreferrer">
      {buttonText}
    </LinkStyle>
  );
};
