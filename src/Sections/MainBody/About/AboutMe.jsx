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
  flex-wrap: wrap;
`;
const AboutText = styled.div`
  align-items: start;
  justify-content: start;
  text-align: left;
  padding: 1rem;
  margin: 0.5rem;
  max-width: 50%;
  box-sizing: border-box;
`;
const AboutTextP = styled.p`
  overflow-wrap: break-word;
  color: var(--font-color-light);
  font-size: 1rem;
  padding: 0.5rem;
`;
const AboutMeH2 = styled.h2`
  color: var(--color-accent);
  font-size: 2.5rem;
`;

const AboutMeH1 = styled.h1`
  color: var(--font-color-light);
  font-size: 7rem;
  font-weight: 900;
  filter: url(#inset-shadow);
`;

const InsetShadowFilter = () => (
  <svg style={{ display: "none" }}>
    <defs>
      <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feComponentTransfer in="SourceAlpha">
          <feFuncA type="table" tableValues="1 0" />
        </feComponentTransfer>
        <feGaussianBlur stdDeviation="4" />
        <feOffset dx="0" dy="0" result="offsetblur" />
        <feFlood floodColor="black" result="color" />
        <feComposite in2="offsetblur" operator="in" />
        <feComposite in2="SourceAlpha" operator="in" />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode />
        </feMerge>
      </filter>
    </defs>
  </svg>
);
export const AboutMe = () => {
  return (
    <AboutMeContainer id="about-me">
      <AboutText>
        <AboutMeH1>
          <InsetShadowFilter />
          Jonny <br /> Hicks
        </AboutMeH1>
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
