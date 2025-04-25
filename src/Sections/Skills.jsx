import { Code, Toolkit, Upcoming, More } from "../Components/Skills/Skills";

import { ListSections, ListContainer } from "../Components/ListsSectionStyles";

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
