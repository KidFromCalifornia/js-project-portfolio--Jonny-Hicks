import {
  Frontend,
  Backend,
  Creative,
  Workflow,
} from "../Components/TechLists/Techlists";

import { ListSections, ListContainer } from "../Components/ListsSectionStyles";

export const ToolkitSection = () => {
  return (
    <ListSections id="toolbox">
      <h2>Toolkit</h2>

      <ListContainer>
        <Frontend />
        <Backend />
        <Workflow />
        <Backend />
        <Creative />
      </ListContainer>
    </ListSections>
  );
};
