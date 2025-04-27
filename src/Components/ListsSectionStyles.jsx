import styled from "styled-components";

export const ListSections = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  justify-content: center;
  align-content: center;
  max-width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    padding: 0 0.5rem;
    margin-bottom: 2rem;
    width: 80%;
  }

  @media (min-width: 1010px) {
    margin-bottom: 4rem;
    padding: 0 4rem;
    width: 80%;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 1rem;
  margin-top: 4rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
`;
