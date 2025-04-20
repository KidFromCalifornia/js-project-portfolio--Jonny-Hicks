import "./Card.css";

export const Card = ({ icon, name, description, index }) => {
  return (
    <div key={index} className="card">
      <img src={icon} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};
