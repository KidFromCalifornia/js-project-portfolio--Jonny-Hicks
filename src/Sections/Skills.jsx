import { Code, Toolkit, Upcoming, More } from "../Components/Skills/Skills";
import styled from "styled-components";

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  justify-content: start;
  box-sizing: border-box;
  align-content: start;
  width: 75%;
`;
const SkillsText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  align-items: start;
  padding: 1rem;
  margin: 0.5rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  width: 100%;
`;
export const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <h2>Skills</h2>
      <SkillsText>
        <Code />
        <Toolkit />
        <More />
        <Upcoming />
      </SkillsText>
    </SkillsContainer>
  );
};
