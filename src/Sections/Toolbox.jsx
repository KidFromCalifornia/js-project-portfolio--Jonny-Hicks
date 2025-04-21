import { Backend } from "../Components/TechLists/Backend";
import { Frontend } from "../Components/TechLists/Frontend";
import { Workflow } from "../Components/TechLists/Workflow";
import { Creative } from "../Components/TechLists/Creative";
import "./Toolbox.css";

export const Toolbox = () => {
  return (
    <section id="toolbox">
      <div className="h2-title">
        <h2> My Toolbox</h2>
      </div>
      <div className="toolbox-list">
        <Frontend />
        <Backend />
        <Workflow />
        <Creative />
      </div>
    </section>
  );
};
