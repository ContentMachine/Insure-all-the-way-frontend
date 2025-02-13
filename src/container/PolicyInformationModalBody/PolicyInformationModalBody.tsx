import Button from "@/components/Button/Button";
import classes from "./PolicyInformationModalBody.module.css";
import Phone from "@/assets/svgIcons/Phone";
import Close from "@/assets/svgIcons/Close";
import Draft from "@/assets/svgIcons/Draft";

type PolicyInformationModalBodyTypes = {
  onClose?: () => void;
};

const PolicyInformationModalBody = ({
  onClose,
}: PolicyInformationModalBodyTypes) => {
  return (
    <div className={classes.container}>
      <Close onClick={onClose} />
      <h2>Policy Information</h2>

      <div className={classes.body}>
        <div>
          <h4>Policy Held</h4>
          <p>N/A</p>
        </div>

        <div>
          <h4>Expiration Date</h4>
          <p>N/A</p>
        </div>

        <div>
          <h4>Agent</h4>
          <p>N/A</p>
        </div>

        <div>
          <h4>Status</h4>
          <p>N/A</p>
        </div>
      </div>

      <div className={classes.buttonContainer}>
        <Button type="bordered" onClick={onClose}>
          <Phone />
          <span>Speak to an Agent</span>
        </Button>
        <Button>
          <Draft />
          <span>File a Claim</span>
        </Button>
      </div>
    </div>
  );
};

export default PolicyInformationModalBody;
