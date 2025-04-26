import { Portrait } from "../../../Components/Portrait/Portrait";
import { ProfileLinks } from "../../../Components/ProfileLinks/ProfileLinks";

import styled from "styled-components";

const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  z-index: 0;
  gap: 1rem;

  @media (max-width: 720px) {
    padding: 0 2rem;
    margin: 2rem 0rem;
  }
  @media (min-width: 1010px) {
    flex-direction: row;
    margin: 4rem 0rem;
    padding: 0 4rem;
  }
`;
const AboutText = styled.div`
  display: flex;
  width: 80;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 720px) {
    width: 70%;
  }
  @media (min-width: 1010px) {
    width: 32rem;
    align-items: start;
    text-align: left;
  }
`;
const AboutTextP = styled.p`
  overflow-wrap: break-word;
  line-height: 2.3rem;
  font-family: "IBM Plex Mono";
  font-weight: normal;
  font-style: normal;
  font-size: 1rem;
  gap: 1rem;
  letter-spacing: 0.023rem;
  margin-bottom: 1rem;

  @media (max-width: 720px) {
    line-height: 1.13rem;
    font-weight: 300;
    font-size: 1.1rem;
  }
  @media (min-width: 1010px) {
    line-height: 1.3;
    font-weight: 300;
    font-size: 1.2rem;
  }
`;

const AboutMeH2 = styled.h2`
  color: var(--color-accent);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 720px) {
    font-size: 3rem;
    font-weight: 500;
    line-height: 3rem;
  }
  @media (min-width: 1010px) {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: normal;
  }
`;

const AboutMeH1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  filter: url(#inset-shadow);
  padding: none;
  margin-bottom: 1rem;

  @media (max-width: 720px) {
    font-size: 8rem;
    font-weight: 900;
    line-height: 6.25rem;
  }
  @media (min-width: 1010px) {
    font-size: 6.5rem;
    font-weight: 900;
  }
`;

export const AboutMe = () => {
  return (
    <AboutMeContainer id="about-me">
      <AboutText>
        <AboutMeH1 style={{ filter: "url(#inset-shadow)" }}>
          Jonny Hicks
        </AboutMeH1>
        <AboutMeH2>FRONTEND DEVELOPER</AboutMeH2>
        <AboutTextP>
          I am a creative problem solver who transitioned into web development,
          leveraging experience in customer service, hospitality, and retail.
          These roles sharpened my attention to detail and user focus.
        </AboutTextP>
        <AboutTextP>
          Currently, I am honing my skills at the Technigo Web Developer Boot
          Camp, specializing in accessible, responsive websites using React,
          JavaScript, and TypeScript.
        </AboutTextP>
        <ProfileLinks />
      </AboutText>
      <Portrait />
    </AboutMeContainer>
  );
};
