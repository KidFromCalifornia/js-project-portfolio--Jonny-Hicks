import { FooterBackground } from "../../Components/FooterBackground";
import "./FooterContent.css";
import { Contacts } from "../../Components/ContactDetails";

export const Footer = () => {
  return (
    <>
      <div className="footer-background">
        <FooterBackground />
      </div>
      <div className="footer-contacts">
        <Contacts />
      </div>
    </>
  );
};
