import Input from "@/components/Input/Input";
import React from "react";

const EnhancedThirdPartyMotorInsuranceForm0 = () => {
  return (
    <form>
      <Input label="First name" placeholder="Eg. John" />
      <Input label="Last name" placeholder="Eg. Doe" />
      <Input
        label="Email Address"
        placeholder="Eg. abc@example.com"
        type="email"
      />
      <Input
        label="Phone Number"
        type="phone"
        placeholder="Eg. +123 456 789 0"
      />
    </form>
  );
};

export default EnhancedThirdPartyMotorInsuranceForm0;
