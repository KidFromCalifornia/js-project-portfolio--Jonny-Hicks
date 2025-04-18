
import "./NetlifyButton.css";

export const NetlifyButton = ({ netlify }) => {
  return (
 
   <a href={netlify} target="_blank" rel="noopener noreferrer" className="netlify-button">
  View Page
</a>
  );
};