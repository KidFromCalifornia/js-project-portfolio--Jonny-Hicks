import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLinks = styled.ul`
  display: none;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  align-items: center;
  align-content: center;
  top: 0;
  padding: 1rem;
  z-index: 100;
  background-color: var(--shadow-color);
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLinksList = styled.li`
  text-decoration: none;
  margin: 0 1rem;
`;

const NavBarLinks = styled(Link)`
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
const ContactLink = styled.a`
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

const Navbar = () => {
  return (
    <NavLinks>
      <NavLinksList>
        <NavBarLinks to="/about">Home</NavBarLinks>
      </NavLinksList>
      <NavLinksList>
        <NavBarLinks to="/about">About me</NavBarLinks>
      </NavLinksList>
      <NavLinksList>
        <NavBarLinks to="/skills">Skills</NavBarLinks>
      </NavLinksList>
      <NavLinksList>
        <NavBarLinks to="/projects">Projects</NavBarLinks>
      </NavLinksList>
      <NavLinksList>
        <ContactLink href="#contact">Contact</ContactLink>
      </NavLinksList>
    </NavLinks>
  );
};

export default Navbar;
