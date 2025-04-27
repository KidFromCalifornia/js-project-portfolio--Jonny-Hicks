import { BaseIcon, BaseButtonList, BaseButtonItem } from "../Styles/CardStyles";
import { OpenLink } from "../Buttons/OpenLink";

export const Card = ({ icon, name, description, netlify, github }) => {
  return (
    <>
      <BaseIcon icon={["fas", icon]} size="2x" className="project-icons" />
      <h3>{name}</h3>
      <p>{description}</p>
      <BaseButtonList>
        <BaseButtonItem>
          <OpenLink url={netlify} buttonText="Demo" />
        </BaseButtonItem>
        <BaseButtonItem>
          <OpenLink url={github} buttonText="Github" />
        </BaseButtonItem>
      </BaseButtonList>
    </>
  );
};
