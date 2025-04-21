import "./NetlifyButton.css";

export const NetlifyButton = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="netlify links"
    >
      Demo
    </a>
  );
};
