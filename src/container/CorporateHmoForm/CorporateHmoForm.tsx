import Dropdown from "@/components/Dropdown/Dropdown";
import classes from "./CorporateHmoForm.module.css";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import TextArea from "@/components/Textarea/TextArea";

const CorporateHmoForm = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h4>Corporate HMO Form</h4>
        <p>
          Please ensure that all your information is correctly filled in,
          failure to do so may render your policy void.
        </p>
      </div>

      <form>
        <Input label="First name" placeholder="Eg: John" />

        <Input label="Last name" placeholder="Eg: Doe" />

        <Input label="Email Address" placeholder="Eg: abc@example.com" />

        <Input label="Phone" placeholder="Eg: +123 45 6789 0" />

        <Input label="Location" placeholder="Eg: No 4. John Street," />

        <Dropdown
          label="Interstate Travel?"
          options={["Yes", "No"]}
          title="Select"
        />

        <TextArea label="Talk To Us" placeholder="Tell us more" />

        <div>
          <Button>Recommend a Plan</Button>
        </div>
      </form>
    </section>
  );
};

export default CorporateHmoForm;
