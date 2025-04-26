import { Column, ListGroup, ListItem } from "../ListStyles";

export const Backend = () => {
  return (
    <>
      <Column className="tech-group backend">
        <h3>
          Backend & <br /> Databases
        </h3>
        <ListGroup className="tech-skills">
          <ListItem>API</ListItem>
          <ListItem>Node.js</ListItem>
          <ListItem>MongoDB</ListItem>
        </ListGroup>
      </Column>
    </>
  );
};

export const Frontend = () => {
  return (
    <>
      <Column>
        <h3>Frontend</h3>
        <ListGroup>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>TypeScript</ListItem>
          <ListItem>React</ListItem>
          <ListItem>WCAG standards</ListItem>
        </ListGroup>
      </Column>
    </>
  );
};

export const Workflow = () => {
  return (
    <>
      <Column>
        <h3>WorkFlow</h3>
        <ListGroup>
          <ListItem>GitHub</ListItem>
          <ListItem>Pair Programming</ListItem>
          <ListItem>Mob Programming</ListItem>
        </ListGroup>
      </Column>
    </>
  );
};

export const Creative = () => {
  return (
    <>
      <Column>
        <h3>
          Creative <br /> & Design
        </h3>
        <ListGroup>
          <ListItem>Lightroom</ListItem>
          <ListItem>Illustrator</ListItem>
          <ListItem>Indesign</ListItem>
          <ListItem>Figma</ListItem>
        </ListGroup>
      </Column>
    </>
  );
};
