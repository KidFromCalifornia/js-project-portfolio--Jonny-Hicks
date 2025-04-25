import {
  Frontend,
  Backend,
  Creative,
  Workflow,
} from "../Components/TechLists/Techlists";

import { ListSections, ListContainer } from "../Components/ListsSectionStyles";

export const Toolkit = () => {
  return (
    <ListSections id="toolbox">
      <div className="h2-title">
        <h2>Toolkit</h2>
      </div>
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
