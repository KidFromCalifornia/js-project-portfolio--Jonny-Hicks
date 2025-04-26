import photo from "../../assets/img/PP-JHicks.png";
import styled from "styled-components";
import { SvgShadow } from "../SvgShadow";

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: scale(0.7);
  width: fit-content;
  height: fit-content;

  @media (min-width: 720px) {
    transform: scale(1);
  }
  @media (min-width: 1100px) {
    transform: scale(1.2);
  }
`;
const Photo = styled.img`
  width: 350px;
  height: auto;
  position: absolute;
  z-index: 1;
  transform: translate(4px, -20px);
`;

const CircleBehind = styled.svg`
  position: relative;
  width: 390px;
  height: 390px;
  z-index: 0;
`;

const Circle = styled.circle`
  stroke: var(--color-neutral);
  stroke-width: 0;
  fill: var(--color-neutral);
  filter: url(#inset-shadow);
`;

export const Portrait = () => {
  return (
    <PhotoContainer className="portrait">
      <Photo src={photo} alt="Portrait of Jonny Hicks" />
      <CircleBehind>
        <SvgShadow />
        <Circle cx="195" cy="195" r="195" />
      </CircleBehind>
      <Photo src={photo} alt="Portrait of Jonny Hicks" />
    </PhotoContainer>
  );
};
