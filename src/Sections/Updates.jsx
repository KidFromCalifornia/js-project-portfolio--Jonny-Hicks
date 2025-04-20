import { Card } from "../Components/Card";
import updatesData from "../Data/Updates.json";
import { LinkButton } from "../Components/LinkButton";

export const Updates = () => {
  return (
    <>
      <h2>Updates</h2>
      <div className="updates-cards">
        {updatesData.map((update, index) => (
          <div key={update.id || index}>
            <Card name={update.name} description={update.description} />
            <div className="card-buttons">
              <LinkButton url={update.post} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
