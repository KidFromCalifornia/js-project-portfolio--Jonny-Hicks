import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    align-items: left;
    justify-content: start;
  }
`;
export const ListGroup = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 2rem;

  @media (min-width: 768px) {
    align-items: left;
    justify-content: start;
  }
`;
export const ListItem = styled.li`
  list-style: none;
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
  color: var(--font-color-light);
  font-weight: 600;
  font-family: var(--font-body);
`;
