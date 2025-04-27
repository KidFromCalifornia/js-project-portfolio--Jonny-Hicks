import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0 0.5rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    padding: 0 0.5rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 1010px) {
    margin-bottom: 4rem;
    padding: 0 4rem;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  width: 100%;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
