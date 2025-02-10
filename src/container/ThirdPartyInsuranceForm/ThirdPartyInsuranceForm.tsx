import Image from "next/image";
import classes from "./ThirdPartyInsuranceForm.module.css";
import Input from "@/components/Input/Input";
import Dropdown from "@/components/Dropdown/Dropdown";
import Button from "@/components/Button/Button";

const ThirdPartyInsuranceForm = () => {
  return (
    <section className={classes.container} id="insurance-form">
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
        <Input
          label="Registration Number"
          placeholder="Eg: 12346"
          type="number"
        />
        <Input label="Chasis Number" placeholder="Eg: 12346" type="number" />

        <Dropdown
          label="Vehicle Colour"
          options={[
            "White",
            "Black",
            "Gray",
            "Silver",
            "Blue",
            "Red",
            "Brown",
            "Green",
            "Orange",
            "Biege",
            "Purple",
            "Gold",
            "Yellow",
          ]}
          title="Select"
        />

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
          options={[
            "Abia",
            "Adamawa",
            "Akwa Ibom",
            "Anambra",
            "Bauchi",
            "Bayelsa",
            "Benue",
            "Borno",
            "Cross River",
            "Delta",
            "Ebonyi",
            "Edo",
            "Ekiti",
            "Enugu",
            "FCT - Abuja",
            "Gombe",
            "Imo",
            "Jigawa",
            "Kaduna",
            "Kano",
            "Katsina",
            "Kebbi",
            "Kogi",
            "Kwara",
            "Lagos",
            "Nasarawa",
            "Niger",
            "Ogun",
            "Ondo",
            "Osun",
            "Oyo",
            "Plateau",
            "Rivers",
            "Sokoto",
            "Taraba",
            "Yobe",
            "Zamfara",
          ]}
          title="Select State"
        />

        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </section>
  );
};

export default ThirdPartyInsuranceForm;
