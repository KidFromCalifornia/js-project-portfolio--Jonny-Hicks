import { Card } from "../Components/Card";
import "./Projects.css";
import projects from "../Data/projects.json";
import { NetlifyButton } from "../Components/NetlifyButton";
import { GithubButton } from "../Components/GithubButton";

export const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      {projects.projects.map((project) => (
        <div key={project.index} className="projects-card">
          <Card
            icon={project.icon}
            name={project.name}
            description={project.description}
          />
          <div className="card-buttons">
            <NetlifyButton url={project.netlify} />
            <GithubButton url={project.github} />
          </div>
        </div>
      ))}
    </>
  );
};
