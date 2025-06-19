import {
  Frontend,
  Backend,
  Creative,
  Workflow,
} from "../components/Techlists.jsx";
import { ListSections, ListContainer } from "../styles/ListsSectionStyles.jsx";

const ToolkitSection = () => {
  return (
    <ListSections id="toolbox">
      <h2>Toolkit</h2>

      <ListContainer>
        <Frontend />
        <Backend />
        <Workflow />
        <Creative />
      </ListContainer>
    </ListSections>
  );
};

export default ToolkitSection;
