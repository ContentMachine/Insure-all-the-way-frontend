import Button from "@/components/Button/Button";
import Dropdown from "@/components/Dropdown/Dropdown";
import Input from "@/components/Input/Input";
import React from "react";
import classes from "./ComprehensiveMotorInsuranceForm.module.css";
import { states } from "@/utilities/states";

const ComprehensiveMotorInsuranceForm = () => {
  return (
    <section className={classes.container} id="insurance-form">
      <div className={classes.header}>
        <h4>Comprehensive Motor Insurance Form</h4>
        <p>
          Please ensure that all your information is correctly filled in,
          failure to do so may render your policy void.
        </p>
      </div>

      <form>
        <Input label="First Name" placeholder="Eg: John" />
        <Input label="Last Name" placeholder="Eg: Doe" />
        <Input label="Email" placeholder="Eg: example@gmail.com" type="email" />
        <Input label="Phone Number" placeholder="+234 12 345 6789" />
        <Input
          label="Registration Number"
          placeholder="Eg: 12346"
          type="number"
        />
        <Dropdown label="State" options={states} title="Select State" />

        <Dropdown
          label="Cover Period"
          options={["6 Months", "1 Year"]}
          title="Select"
        />

        <Input label="Car Value" placeholder="Eg: 200,000" type="number" />
        <Input
          label="Premium"
          placeholder="Eg: 200,000"
          type="number"
          readOnly
        />

        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </section>
  );
};

export default ComprehensiveMotorInsuranceForm;
