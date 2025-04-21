export const LinkButton = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button"
    >
      <p>Read Post</p>
    </a>
  );
};
