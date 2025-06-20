import { UpdateCard } from "../components/UpdateCard.jsx";
import {
  SectionContainer,
  CardGroup,
  CardContainer,
} from "../styles/CardSectionStyling.jsx";
import updates from "../data/Updates.json";

// Validate updates structure
if (!Array.isArray(updates.updates)) {
  console.error(
    "Invalid updates structure: 'updates.updates' should be an array."
  );
}

// Ensure updates has a valid structure

const Updates = () => {
  return (
    <SectionContainer id="updates">
      <h2>Updates</h2>

      <CardGroup>
        {updates.updates.map((update, index) => (
          <CardContainer
            key={index}
            style={{ height: "17rem" }}
            className="updates-card"
          >
            <UpdateCard
              icon={update.icon}
              name={update.name}
              description={update.description}
              post={update.post}
              style={{ height: "20rem" }}
            />
          </CardContainer>
        ))}
      </CardGroup>
    </SectionContainer>
  );
};
export default Updates;
