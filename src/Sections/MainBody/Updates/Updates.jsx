import { UpdateCard } from "../../../Components/Cards/UpdateCard";
import "./updates.css";
import updates from "../../../data/Updates.json";

// Ensure updates has a valid structure

export const Updates = () => {
  return (
    <section id="updates">
      <div className="h3-title">
        <h2>Updates</h2>
      </div>
      <div className="updates-container">
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
      </div>
    </section>
  );
};
