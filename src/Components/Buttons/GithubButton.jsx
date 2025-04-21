import "./GithubButton.css";

export const GithubButton = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="github links"
    >
      Github
    </a>
  );
};
