import styled from "styled-components";

export const ListSections = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 4rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 0.5rem;
    margin-bottom: 2rem;
    width: 90%;
  }

  @media (min-width: 1010px) {
    margin-bottom: 4rem;
    width: 90%;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: start;
  justify-content: space-evenly;
  padding: 1rem;
  margin-top: 4rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  gap: rem;
  width: 100%;
`;
