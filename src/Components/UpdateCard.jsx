import { BaseButtonList, BaseButtonItem } from "../styles/CardStyles.jsx";
import { OpenLink } from "./Buttons/OpenLink.jsx";

export const UpdateCard = ({ name, description, post }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>
      <BaseButtonList>
        <BaseButtonItem>
          <OpenLink url={post} buttonText="Read More" />
        </BaseButtonItem>
      </BaseButtonList>
    </>
  );
};
