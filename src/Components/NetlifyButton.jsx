import "./NetlifyButton.css";

export const NetlifyButton = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="netlify-button"
    >
      <p>View Page </p>
    </a>
  );
};
