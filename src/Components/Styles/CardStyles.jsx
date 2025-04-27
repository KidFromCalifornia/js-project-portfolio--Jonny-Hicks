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

export const BaseIcon = styled(FontAwesomeIcon)`
  margin-bottom: 0.5rem;
  font-size: 10rem;
  filter: drop-shadow(var(--shadow));

  path {
    fill: var(--color-accent);
  }
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
