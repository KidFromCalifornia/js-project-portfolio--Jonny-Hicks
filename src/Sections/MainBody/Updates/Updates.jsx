import { UpdateCard } from "../../../Components/Cards/UpdateCard";
import {
  SectionContainer,
  CardContainer,
} from "../../../Components/Styles/CardSectionStyling";
import updates from "../../../Data/Updates.json";
// Validate updates structure
if (!Array.isArray(updates.updates)) {
  console.error(
    "Invalid updates structure: 'updates.updates' should be an array."
  );
}

// Ensure updates has a valid structure

export const Updates = () => {
  return (
    <SectionContainer id="updates">
      <h2>Updates</h2>

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
