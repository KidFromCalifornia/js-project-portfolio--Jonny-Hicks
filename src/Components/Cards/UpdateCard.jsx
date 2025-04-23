import {
  CardContainer,
  BaseIcon,
  BaseButtonList,
  BaseButtonItem,
} from "./CardStyles.jsx";
import { OpenLink } from "../Buttons/OpenLink";

export const UpdateCard = ({ name, description, index, post }) => {
  return (
    <CardContainer key={index}>
      <h3>{name}</h3>
      <p>{description}</p>
      <BaseButtonList>
        <BaseButtonItem>
          <OpenLink url={post} buttonText="Read More" />
        </BaseButtonItem>
      </BaseButtonList>
    </CardContainer>
  );
};
