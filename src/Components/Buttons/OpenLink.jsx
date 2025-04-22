export const OpenLink = ({ url, buttonText }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {buttonText}
    </a>
  );
};
