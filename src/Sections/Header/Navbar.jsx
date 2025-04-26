import styled from "styled-components";

const NavLinks = styled.ul`
  display: none;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  padding: 1rem 0;
  position: fixed;
  align-items: center;
  top: 0;
  z-index: 100;
  background-color: var(--primary-color);

  @media (min-width: 720px) {
    display: flex;
  }
`;

const NavLinksList = styled.li`
  text-decoration: none;
  margin: 0 1rem;
`;

const NavBarLinks = styled.a`
  text-decoration: none;
  font-family: var(--a-font);
  color: var(--font-color-light);
  font-size: 1rem;
  font-weight: 400;
  text-shadow: var(--shadow);
  margin: 0;
  text-transform: uppercase;

  &:hover {
    color: var(--color-accent);
    cursor: pointer;
    transform: scale(1.5);
    transition: all 0.3s ease-in-out;
  }
`;

export const Navbar = () => {
  return (
    <NavLinks>
      <NavLinksList>
        <NavBarLinks href="#aboutme">About me</NavBarLinks>
      </NavLinksList>
      <NavLinksList>
        <NavBarLinks href="#skills">Skills</NavBarLinks>
      </NavLinksList>
      <NavLinksList>
        <NavBarLinks href="#projects">Projects</NavBarLinks>
      </NavLinksList>
      <NavLinksList>
        <NavBarLinks href="#toolbox">Toolbox</NavBarLinks>
      </NavLinksList>
      <NavLinksList>
        <NavBarLinks href="#updates">Updates</NavBarLinks>
      </NavLinksList>
      <NavLinksList>
        <NavBarLinks href="#contact">Contact</NavBarLinks>
      </NavLinksList>
    </NavLinks>
  );
};
