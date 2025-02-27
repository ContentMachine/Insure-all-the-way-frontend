import Dropdown from "@/components/Dropdown/Dropdown";
import classes from "../IndividualAndFamilyHmoForm/IndividualAndFamilyHmoForm.module.css";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { states } from "@/utilities/states";

const BuildingForm = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h4>Building Insurance Policy Form</h4>
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
        <Input
          label="Location Of Property"
          placeholder="ABC Close"
          type="number"
        />{" "}
        <Input label="Value Of Property" placeholder="200,000" type="number" />{" "}
        <Dropdown label="State" options={states} title="Select" />
        <div>
          <Button>Recommend a Plan</Button>
        </div>
      </form>
    </section>
  );
};

export default BuildingForm;
