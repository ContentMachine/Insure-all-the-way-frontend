import Image from "next/image";
import classes from "./ThirdPartyInsuranceForm.module.css";
import Input from "@/components/Input/Input";
import Dropdown from "@/components/Dropdown/Dropdown";
import Button from "@/components/Button/Button";

const ThirdPartyInsuranceForm = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h4>Third Party Insurance Form</h4>
        <p>
          Please ensure that all your information is correctly filled in,
          failure to do so may render your policy void.
        </p>
      </div>

      <form>
        <Dropdown
          label="Select Product"
          options={[
            "Third Party Private Car",
            "Third Party Private Bus",
            "Third Party Motorcycle",
            "Third Party Only (Commercial)",
          ]}
          title="Select"
        />
        <Input label="Registration Number" placeholder="Eg: 12346" />
        <Input label="Chasis Number" placeholder="Eg: 12346" />
        <Input label="Vehicle Colour" placeholder="Eg: Red" />
        <Dropdown
          label="Do you require assistance with vehicle license and/or road worthiness"
          options={["Yes", "No"]}
          title="Select"
        />

        <h4>Tell us About Yourself</h4>
        <Dropdown
          label="Title"
          options={["Mr.", "Mrs.", "Miss"]}
          title="Select"
        />
        <Input label="First Name" placeholder="Eg: John" />
        <Input label="Last Name" placeholder="Eg: Doe" />
        <Input label="Email" placeholder="Eg: example@gmail.com" type="email" />
        <Input label="Phone Number" placeholder="+234 12 345 6789" />
        <Input label="Address" placeholder="No. 4, B Close, A State" />
        <Dropdown
          label="State"
          options={["FCT", "Lagos"]}
          title="Select State"
        />
        <Button>Submit</Button>
      </form>
    </section>
  );
};

export default ThirdPartyInsuranceForm;
