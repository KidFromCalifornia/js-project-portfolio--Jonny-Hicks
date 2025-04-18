import "./GithubButton.css";

export const GithubButton = ({ github }) => {
  return (
 <a href={github} target="_blank" rel="noopener noreferrer" className="github-button">
  Github
</a>
  );
};