import { Card } from "../Components/Card";
import "./Projects.css";
import projects from "../Data/projects.json";

export const Projects = ({ project = projects }) => {
  return (
    <>
      <h2>Projects</h2>
      <div className="projects-card">
        <Card
          key={project.index}
          name={project.name}
          description={project.description}
          github={project.github}
          netlify={project.netlify}
        />
      </div>
    </>
  );
};
