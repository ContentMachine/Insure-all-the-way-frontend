import Close from "@/assets/svgIcons/Close";
import Input from "@/components/Input/Input";
import TextArea from "@/components/Textarea/TextArea";
import Button from "@/components/Button/Button";
import Phone from "@/assets/svgIcons/Phone";
import Draft from "@/assets/svgIcons/Draft";
import classes from "../MotorClaimsForm/MotorClaimsForm.module.css";
import Dropdown from "@/components/Dropdown/Dropdown";

type PropertyClaimFormType = {
  onClose: () => void;
};

const PropertyClaimForm = ({ onClose }: PropertyClaimFormType) => {
  return (
    <div className={classes.container}>
      <h4>All Risk Claim Form</h4>
      <p>Please fill the form below so we can serve you better</p>
      <Close onClick={onClose} />
      <form action="">
        <Dropdown label="Type Of Claim" options={["Theft", "Accident"]} />
        <Input label="Location of Claim" placeholder="A Close, B State" />
        <Input label="Date and Time of Occurence" type="datetime-local" />
        <Input label="Estimation of Repairs" type="number" />

        <TextArea
          label="Describe Property Involved (Model, Make, Year) "
          placeholder="Apple Macbook Pro, 2024"
        />
        <TextArea
          label="Provide the circumstances of loss or damage"
          placeholder="Type here..."
        />

        <div className={classes.buttonSection}>
          <Button type="bordered">
            <Phone />
            <span>Call your Agent</span>
          </Button>
          <Button>
            <Draft />
            <span>Submit your Claim</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PropertyClaimForm;
