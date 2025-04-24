import { Card } from "../../../Components/Cards/Card";

import projects from "../../../Data/projects.json";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 1rem;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  text-align: center;
  padding: 1rem;
  margin: 0.5rem;
  max-width: 100%;
  box-sizing: border-box;
`;

export const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>Projects</h2>

      <CardContainer className="projects">
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
      </CardContainer>
    </ProjectsContainer>
  );
};
