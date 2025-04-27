import { Card } from "../../../Components/Cards/Card";
import {
  SectionContainer,
  CardGroup,
  CardContainer,
} from "../../../Components/Styles/CardSectionStyling";
import projects from "../../../Data/projects.json";

export const Projects = () => {
  if (!projects || !projects.projects) {
    return <p>Projects data is unavailable.</p>;
  } else
    return (
      <SectionContainer id="projects">
        <h2>Projects</h2>

        <CardGroup>
          {projects.projects.map((project, index) => (
            <CardContainer
              key={project.index}
              className="project-card"
              style={{ height: "35rem" }}
            >
              <Card
                icon={project.icon}
                name={project.name}
                description={project.description}
                netlify={project.netlify}
                github={project.github}
              />
            </CardContainer>
          ))}
        </CardGroup>
      </SectionContainer>
    );
};
