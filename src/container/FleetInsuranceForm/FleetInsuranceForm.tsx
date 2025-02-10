import Button from "@/components/Button/Button";
import classes from "./FleetInsuranceForm.module.css";
import Dropdown from "@/components/Dropdown/Dropdown";
import Input from "@/components/Input/Input";
import TextArea from "@/components/Textarea/TextArea";

const FleetInsuranceForm = () => {
  return (
    <section className={classes.container} id="insurance-form">
      <div className={classes.header}>
        <h4>Fleet Motor Insurance Form</h4>
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
        <Input label="Address" placeholder="No. 4, B Close, A State" />
        <Dropdown
          label="Property Type"
          options={["Residential", "Corporate"]}
          title="Select "
        />

        <TextArea
          label="Talk to us"
          placeholder="Tell us what you want to achieve"
        />

        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </section>
  );
};

export default FleetInsuranceForm;
