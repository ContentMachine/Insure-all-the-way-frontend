import Dropdown from "@/components/Dropdown/Dropdown";
import Input from "@/components/Input/Input";
import { states } from "@/utilities/states";
import React from "react";

const EnhancedThirdPartyMotorInsuranceForm3 = () => {
  return (
    <form action="">
      <Dropdown options={states} label="Inspection State" />
      <Input label="Inspection Address" placeholder="Eg. 2, Abc Street" />
      <Input label="Preferred Date for Inspection" type="date" />
      <Input label="Contact Name" placeholder="Eg. John Doe" />
      <Input
        label="Phone Number"
        type="phone"
        placeholder="Eg. +123 456 789 0"
      />
    </form>
  );
};

export default EnhancedThirdPartyMotorInsuranceForm3;
