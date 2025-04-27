import {
  Code,
  Toolkit,
  Upcoming,
  More,
} from "../../../Components/Skills/SkillsList.jsx";

import {
  ListSections,
  ListContainer,
} from "../../../Components/Styles/ListsSectionStyles";

export const Skills = () => {
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
