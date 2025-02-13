import Input from "@/components/Input/Input";
import classes from "./ClaimsForm.module.css";
import MotorClaimsForm from "../MotorClaimsForm/MotorClaimsForm";
import PropertyClaimForm from "../PropertyClaimForm/PropertyClaimForm";

type ClaimsFormTypes = {
  onClose: () => void;
};

const ClaimsForm = ({ onClose }: ClaimsFormTypes) => {
  return (
    <form className={classes.container}>
      {/* <MotorClaimsForm onClose={onClose} /> */}
      <PropertyClaimForm onClose={onClose} />
    </form>
  );
};

export default ClaimsForm;
