import Phone from "@/assets/svgIcons/Phone";
import classes from "./ContactUsModalBody.module.css";
import Close from "@/assets/svgIcons/Close";

const ContactUsModalBody = () => {
  return (
    <div className={classes.container}>
      <Close />
      <div>
        <Phone />
        <span>Call an Agent</span>
      </div>

      <div>
        <Phone />
        <span>Text an Agent</span>
      </div>
    </div>
  );
};

export default ContactUsModalBody;
