import { Column, ListGroup, ListItem } from "../Styles/ListStyles";

export const Code = () => {
  return (
    <>
      <Column>
        <h3>Code</h3>
        <ListGroup>
          <ListItem>React</ListItem>
          <ListItem>JavaScript (ES6+)</ListItem>
          <ListItem>TypeScript</ListItem>
          <ListItem>Styled Components</ListItem>
          <ListItem>HTML5</ListItem>
          <ListItem>CSS3</ListItem>
        </ListGroup>
      </Column>
    </>
  );
};

export const Toolkit = () => {
  return (
    <>
      <Column>
        <h3>Toolkit</h3>
        <ListGroup>
          <ListItem>VSCode</ListItem>
          <ListItem>GitHub</ListItem>
          <ListItem>Figma</ListItem>
          <ListItem>Slack</ListItem>
          <ListItem>Netlify</ListItem>
        </ListGroup>
      </Column>
    </>
  );
};

export const Upcoming = () => {
  return (
    <>
      <Column>
        <h3>Upcoming</h3>
        <ListGroup>
          <ListItem>Node.js</ListItem>
          <ListItem>MongoDB</ListItem>
          <ListItem>Postman</ListItem>
          <ListItem style={{ marginTop: "1rem" }}>
            <h3>Goals</h3>
          </ListItem>
          <ListItem>axe DevTools</ListItem>
          <ListItem>React Native</ListItem>
          <ListItem>Flutter</ListItem>
        </ListGroup>
      </Column>
    </>
  );
};

export const More = () => {
  return (
    <>
      <Column>
        <h3>More</h3>
        <ListGroup>
          <ListItem>Detail-Oriented </ListItem>
          <ListItem>Inclusive Design</ListItem>
          <ListItem>UX Collaboration</ListItem>
          <ListItem>Agile Methodology</ListItem>
          <ListItem>Content Creation </ListItem>
          <ListItem>Problem Solving</ListItem>
          <ListItem>Team Player</ListItem>
        </ListGroup>
      </Column>
    </>
  );
};
