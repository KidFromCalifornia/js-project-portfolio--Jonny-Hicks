import "./Card.css";
import { PostButton } from "./PostButton.jsx";

export const UpdateCard = ({ icon, name, description, index, post }) => {
  return (
    <div key={index} className="card">
      <i className={icon}></i>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul className="card-buttons">
        <li className="post-button">
          <PostButton url={post} />
        </li>
      </ul>
    </div>
  );
};
