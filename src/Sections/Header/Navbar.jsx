import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: none;
  margin: 0 1rem;
  position: fixed;
  align-items: center;
  top: 0;

  @media (max-width: 720px) {
    display: inline-block;
  }
  @media (min-width: 1010px) {
    display: inline-block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem 0;
`;

const NavLinksList = styled.li`
  text-decoration: none;
  margin: 0 1rem;
`;

const NavBarLinks = styled.a`
  text-decoration: none;
  font-family: var(--a-font);
  color: var(--font-color-light);
  font-size: 1 rem;
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
    <NavbarContainer>
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
    </NavbarContainer>
  );
};
