import "./Card.css"


export const Card = ({ name, discription, icon }) => {
  return (
    <article className="card">
      <img src={icon} alt="" className="card-image" />
      <h2>{name}</h2>
      <p>{discription}</p>
      
    </article>
  );
};
 
