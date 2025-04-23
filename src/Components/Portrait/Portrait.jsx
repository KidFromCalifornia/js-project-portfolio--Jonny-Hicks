import photo from "../../assets/img/PP-JHicks.png";
import styled from "styled-components";

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  align-content: end;
  position: relative;
`;

const Photo = styled.img`
  width: 330px;
  height: 390px;
  position: absolute;
`;

const CircleBehind = styled.svg`
  position: relative;
  width: 390px;
  height: 390px;
  z-index: -1;
`;

const Circle = styled.circle`
  stroke: var(--color-neutral);
  stroke-width: 0;
  fill: var(--color-neutral);
  box-shadow: inset var(--shadow);
`;

export const Portrait = () => {
  return (
    <PhotoContainer className="portrait">
      <CircleBehind>
        <Photo src={photo} alt="Portrait of Jonny Hicks" />
        <Circle cx="185" cy="185" r="185" />
      </CircleBehind>
    </PhotoContainer>
  );
};
