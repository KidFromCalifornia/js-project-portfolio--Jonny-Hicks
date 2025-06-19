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
  margin-top: 4rem;

  @media (min-width: 768px) {
    padding: 0 0.5rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 1010px) {
    margin-bottom: 4rem;
    padding: 0 4rem;
  }
`;
export const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  height: auto;
  width: 100%;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CardContainer = styled.div`
  margin: 0.5rem;
  max-width: 18.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  gap: 1rem;
  border: 2px solid var(--color-primary);
  border-radius: 1rem;
  padding: 0.05rem;
`;
