import { Navbar } from "./Navbar";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

export const Header = () => {
  return (
    <HeaderContainer className="header">
      <Navbar />
    </HeaderContainer>
  );
};
