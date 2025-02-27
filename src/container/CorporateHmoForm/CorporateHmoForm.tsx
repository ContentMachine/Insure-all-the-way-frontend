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
        <p>Effortless Corporate HMO Enrollment for a Healthier Workforce.</p>
      </div>

      <form>
        <Input label="First name" placeholder="Eg: John" />

        <Input label="Last name" placeholder="Eg: Doe" />

        <Input label="Email Address" placeholder="Eg: abc@example.com" />

        <Input label="Phone" placeholder="Eg: +123 45 6789 0" />

        <Input
          label="Name of Organisation or Group"
          placeholder="Eg. Eniola & Sons"
        />
        <Input
          label="Number of people in Organisation or Group"
          placeholder="Eg. 10"
          type="number"
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
