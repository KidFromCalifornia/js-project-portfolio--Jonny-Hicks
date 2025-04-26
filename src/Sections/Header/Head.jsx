import { Navbar } from "./Navbar";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  width: 100dvw;
  height: 2rem;
  background-color: var(--primary-color);
`;

export const Header = () => {
  return (
    <HeaderContainer className="header">
      <Navbar />
    </HeaderContainer>
  );
};
