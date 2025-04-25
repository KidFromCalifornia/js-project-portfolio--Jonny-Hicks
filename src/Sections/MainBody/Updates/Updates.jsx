import { UpdateCard } from "../../../Components/Cards/UpdateCard";
import {
  SectionContainer,
  CardContainer,
} from "../../../Components/CardSectionStyling";
import updates from "../../../data/Updates.json";

// Ensure updates has a valid structure

export const Updates = () => {
  return (
    <SectionContainer id="updates">
      <div className="h2-title">
        <h2>Updates</h2>
      </div>
      <CardContainer className="updates-container">
        {updates.updates.map((update, index) => (
          <div key={index} className="updates-card">
            <UpdateCard
              icon={update.icon}
              name={update.name}
              description={update.description}
              post={update.post}
            />
          </div>
        ))}
      </CardContainer>
    </SectionContainer>
  );
};
