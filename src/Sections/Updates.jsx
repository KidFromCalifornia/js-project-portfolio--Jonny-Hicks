import { UpdateCard } from "../Components/UpdateCard";
import "./updates.css";
import updates from "../data/Updates.json";

export const Updates = () => {
  return (
    <section>
      <div className="h3-title">
        <h2>Updates</h2>
      </div>
      <div className="updates-container">
        {updates.projects.map((update, index) => (
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
