import {Card} from "../Components/Card.jsx";
import "./Projects.css";


export const Projects = (({projects, index}) => {
  return (
    <section id="projects">
      <h2> My Projects</h2>
    
        {projects.map((project) => (
        <Card
          key={index}
          name={project.name}
          description={project.description}
          icon={project.icon}
        />

      ))}
    </section>
  );
})