import { Card } from "../../../Components/Card" 
import { projects} from "../../../Components/Card/data"
import "/.data/projects.json"


export const Card = ({ data }) => {
  const { title, description, image } = data;

  return (
    <div className="card">
      <img src={icon} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}