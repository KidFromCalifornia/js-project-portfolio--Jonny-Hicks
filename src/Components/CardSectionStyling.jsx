import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0 4rem;
  margin-bottom: 4rem;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  max-width: 100%;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 4rem;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`;
