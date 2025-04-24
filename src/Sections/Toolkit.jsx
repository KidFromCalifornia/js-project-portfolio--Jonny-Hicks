import {
  Frontend,
  Backend,
  Creative,
  Workflow,
} from "../Components/TechLists/Techlists";
import { SectionContainer, CardContainer } from "../Components/SectionStyling";
export const Toolkit = () => {
  return (
    <SectionContainer id="toolbox">
      <div className="h2-title">
        <h2>Toolkit</h2>
      </div>
      <CardContainer className="toolbox-list">
        <Frontend />
        <Backend />
        <Workflow />
        <Backend />
        <Creative />
      </CardContainer>
    </SectionContainer>
  );
};
