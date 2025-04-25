import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  text-align: left;
  margin-top: 2rem;
`;
export const ListItem = styled.li`
  list-style: none;
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
  color: var(--font-color-light);
  font-weight: 600;
  font-family: var(--font-body);
`;
