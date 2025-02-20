import React from "react";
import classes from "./PaymentModalBody.module.css";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Close from "@/assets/svgIcons/Close";

type PaymentModalBodyType = {
  onSuccess: () => void;
};

const PaymentModalBody = ({ onSuccess }: PaymentModalBodyType) => {
  return (
    <div className={classes.container}>
      <Close />
      <h4>Please confirm your payment details</h4>

      <Input label="Fullname" placeholder="Eg. John Doe" readOnly />
      <Input label="Email" placeholder="Eg abc@example.com" readOnly />
      <Input label="Phone" type="phone" readOnly />
      <Input label="Amount" readOnly />

      <Button type="secondary" onClick={onSuccess}>
        Pay
      </Button>
    </div>
  );
};

export default PaymentModalBody;
