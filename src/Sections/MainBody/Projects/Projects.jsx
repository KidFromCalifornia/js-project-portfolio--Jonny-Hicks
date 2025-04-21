import { Card } from "../../../Components/Cards/Card";
import "./Projects.css";
import projects from "../../../Data/projects.json";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="h2-title">
        <h2>Projects</h2>
      </div>
      <div className="projects">
        {projects.projects.map((project) => (
          <div key={project.index} className="project-card">
            <Card
              icon={project.icon}
              name={project.name}
              description={project.description}
              netlify={project.netlify}
              github={project.github}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
