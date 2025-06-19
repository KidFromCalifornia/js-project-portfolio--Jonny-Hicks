import Navbar from "./Navbar";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  width: 100%;
  height: fit-content;
  background-color: var(--primary-color);
`;

const Header = () => {
  return (
    <HeaderContainer className="header">
      <Navbar />
    </HeaderContainer>
  );
};
export default Header;
