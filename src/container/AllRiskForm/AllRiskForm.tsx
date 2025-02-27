import Input from "@/components/Input/Input";
import classes from "../IndividualAndFamilyHmoForm/IndividualAndFamilyHmoForm.module.css";
import Dropdown from "@/components/Dropdown/Dropdown";
import Button from "@/components/Button/Button";
import { states } from "@/utilities/states";

const AllRiskForm = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h4>All Risks Policy Form</h4>
        <p>
          Comprehensive Protection for Your Property. Building Insurance Policy
        </p>
      </div>

      <form>
        <Input label="First Name" placeholder="Eg: John" />
        <Input label="Last Name" placeholder="Eg: Doe" />{" "}
        <Input label="Email" placeholder="Eg: abc@xyz.com" />{" "}
        <Input label="Phone Number" placeholder="Eg: +123 45 6789" />{" "}
        <Input label="Address" placeholder="Eg: 10 Abc Close" />{" "}
        <Dropdown label="State" options={states} title="Select" />
        <Dropdown
          label="What type of device would you like to insure"
          title="Select"
          options={["Laptop", "Phone"]}
        />{" "}
        <Input
          label="Value of the device"
          placeholder="200,000"
          type="number"
        />
        <Input label="Quantity of the device" placeholder="10" type="number" />
        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </section>
  );
};

export default AllRiskForm;
