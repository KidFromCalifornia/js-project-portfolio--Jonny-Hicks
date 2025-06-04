import { Code, Toolkit, Upcoming, More } from "../components/SkillsLists.jsx";

import { ListSections, ListContainer } from "../styles/ListsSectionStyles.jsx";

const Skills = () => {
  return (
    <ListSections id="skills">
      <h2>Skills</h2>
      <ListContainer>
        <Code />
        <Toolkit />
        <More />
        <Upcoming />
      </ListContainer>
    </ListSections>
  );
};
export default Skills;
