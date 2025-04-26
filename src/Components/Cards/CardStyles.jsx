import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversalAccess,
  faFilm,
  faUtensils,
  faCloudSunRain,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faUniversalAccess, faFilm, faUtensils, faCloudSunRain);

export const CardContainer = styled.div`
  margin: 0.5rem;
  max-width: 18.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  gap: 1rem;
  border: 2px solid var(--color-primary);
  border-radius: 1rem;
  padding: 0.05rem;
`;

export const BaseIcon = styled(FontAwesomeIcon)`
  color: var(--primary-accent);
  margin-bottom: 0.5rem;
  font-size: 10rem;
  filter: drop-shadow(var(--shadow));
  fill: var(--primary-accent);
`;

export const BaseButtonList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.5rem;
`;

export const BaseButtonItem = styled.li`
  list-style: none;
`;
