import Phone from "@/assets/svgIcons/Phone";
import classes from "./ContactUsModalBody.module.css";
import Close from "@/assets/svgIcons/Close";
import Whatsapp from "@/assets/svgIcons/Keyboard";

type ContactUsModalBodyTypes = {
  onClose: () => void;
};

const ContactUsModalBody = ({ onClose }: ContactUsModalBodyTypes) => {
  return (
    <div className={classes.container}>
      <h4>How would you like to contact us?</h4>
      <Close onClick={onClose} />
      <div>
        <Phone />
        <span>
          <a href="tel:+2348095016666">Call an Agent</a>
        </span>
      </div>

      <div>
        <Whatsapp />
        <span>
          <a href="https://wa.link/achd56" rel="noreferrer" target="_blank">
            Text an Agent
          </a>
        </span>
      </div>
    </div>
  );
};

export default ContactUsModalBody;
