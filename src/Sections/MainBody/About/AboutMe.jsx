import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { Portrait } from "../../../Components/Portrait/Portrait";
import { ProfileLinks } from "../../../Components/ProfileLinks/ProfileLinks";
import { SvgShadow } from "../../../Components/SvgShadow";

import styled from "styled-components";

const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding: 0 4rem;
  justify-content: space-evenly;
  box-sizing: border-box;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  z-index: 0;
  margin: 4rem 0rem;
`;
const AboutText = styled.div`
  display: flex;
  width: 650px;
  height: 742px;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  align-content: space-between;

  text-align: left;
`;
const AboutTextP = styled.p`
  overflow-wrap: break-word;
  line-height: 2rem;
  font-family: "IBM Plex Mono";
  font-weight: 600;
  font-style: normal;
  font-size: 1.2rem;
  padding: 0.5rem;
`;
const AboutMeH2 = styled.h2`
  color: var(--color-accent);
  font-size: 2.5rem;
`;

const AboutMeH1 = styled.h1`
  font-size: 6.5rem;
  font-weight: 900;
  filter: url(#inset-shadow);
`;

export const AboutMe = () => {
  return (
    <AboutMeContainer id="about-me">
      <AboutText>
        <AboutMeH1 style={{ filter: "url(#inset-shadow)" }}>
          Jonny <br /> Hicks
        </AboutMeH1>
        <AboutMeH2>FRONTEND DEVELOPER</AboutMeH2>
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
