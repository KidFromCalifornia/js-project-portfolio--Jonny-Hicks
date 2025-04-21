import { Backend } from "../Components/Backend";
import { Frontend } from "../Components/Frontend";
import { Workflow } from "../Components/Workflow";
import { Creative } from "../Components/Creative";
import "./Toolbox.css";

export const Toolbox = () => {
  return (
    <section id="toolbox">
      <h2> My Toolbox</h2>
      <div className="toolbox-list">
        <Frontend />
        <Backend />
        <Workflow />
        <Creative />
      </div>
    </section>
  );
};
