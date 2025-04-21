import "./PostButton.css";

export const PostButton = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="post-button"
    >
      View Post
    </a>
  );
};
