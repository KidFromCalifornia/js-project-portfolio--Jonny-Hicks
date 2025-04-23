import { Portrait } from "../../../Components/Portrait/Portrait";
import { ProfileLinks } from "../../../Components/ProfileLinks/ProfileLinks";

import styled from "styled-components";

const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding: 0 5rem;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
`;
const AboutText = styled.div`
  align-items: start;
  justify-content: start;
  text-align: left;
  padding: 1rem;
  margin: 0.5rem;
  max-width: 50%;
`;
const AboutTextP = styled.p`
  overflow-wrap: break-word;
  color: var(--font-color-light);
  font-size: 1rem;
`;
const AboutMeH2 = styled.h2`
  color: var(--color-accent);
`;

export const AboutMe = () => {
  return (
    <AboutMeContainer id="about-me">
      <AboutText>
        <h1>
          Jonny <br /> Hicks
        </h1>
        <AboutMeH2>I Am a Web Developer</AboutMeH2>
        <AboutTextP>
          I am a creative problem solver who has transitioned into web
          development, leveraging my background in customer service,
          hospitality, and retail. These roles have honed my attention to detail
          and strengthened my ability to understand and meet user needs.
          <br /> <br />
          Currently, I am refining my skills through the Technigo Web Developer
          Boot Camp, where I specialize in building accessible and responsive
          websites with modern technologies like React, JavaScript, and
          TypeScript.
        </AboutTextP>
        <ProfileLinks />
      </AboutText>
      <Portrait />
    </AboutMeContainer>
  );
};
