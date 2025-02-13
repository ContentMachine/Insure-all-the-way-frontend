import Input from "@/components/Input/Input";
import TextArea from "@/components/Textarea/TextArea";
import React from "react";
import classes from "./MotorClaimsForm.module.css";
import Close from "@/assets/svgIcons/Close";
import Button from "@/components/Button/Button";
import Phone from "@/assets/svgIcons/Phone";
import Draft from "@/assets/svgIcons/Draft";

type MotorClaimsFormType = {
  onClose: () => void;
};

const MotorClaimsForm = ({ onClose }: MotorClaimsFormType) => {
  return (
    <div className={classes.container}>
      <h4>Motor Claim Form</h4>
      <p>Please fill the form below so we can serve you better</p>
      <Close onClick={onClose} />
      <form action="">
        <Input label="Date and TIme of Loss" type="datetime-local" />
        <Input label="Vehicle Registration Number" />
        <Input label="Location of Theft/Accident" />
        <TextArea label="Narration of Accident " />
        <div className={classes.buttonSection}>
          <Button type="bordered">
            <Phone />
            <span>Call your Agent</span>
          </Button>
          <Button>
            <Draft />
            <span>Submit your Motor Claim</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MotorClaimsForm;
