import "./PostButton.css";

export const PostButton = ({ url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="button">
      View Post
    </a>
  );
};
