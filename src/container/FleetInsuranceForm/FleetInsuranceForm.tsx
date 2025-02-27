import Button from "@/components/Button/Button";
import classes from "./FleetInsuranceForm.module.css";
import Dropdown from "@/components/Dropdown/Dropdown";
import Input from "@/components/Input/Input";
import TextArea from "@/components/Textarea/TextArea";
import { fleetFormDataTypes, requestType } from "@/utilities/types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { inputChangeHandler } from "@/helpers/inputChangeHandler";
import { TODAY } from "@/utilities/constants";
import moment from "moment";

type FleetInsuranceFormTypes = {
  data: fleetFormDataTypes;
  setData: Dispatch<SetStateAction<fleetFormDataTypes>>;
  onSubmit: () => void;
  requestState: requestType;
};

const FleetInsuranceForm = ({
  data,
  setData,
  onSubmit,
  requestState,
}: FleetInsuranceFormTypes) => {
  // States
  const [propertyType, setPropertyType] = useState("");

  // Effects
  useEffect(() => {
    if (propertyType) {
      setData((prevState) => {
        return { ...prevState, propertyType };
      });
    }
  }, [propertyType]);

  useEffect(() => {
    if (data?.propertyType) {
      const startDate = TODAY;
      const endDate = String(moment().add(1, "y").format("YYYY-MM-DD"));

      setData((prevState) => {
        return {
          ...prevState,
          startDate: startDate as string,
          endDate: endDate as string,
        };
      });
    }
  }, [data.propertyType]);

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
        <Input
          label="First Name"
          placeholder="Eg: John"
          name="firstName"
          value={data?.firstName}
          onChange={(e) => inputChangeHandler(e, setData)}
        />
        <Input
          label="Last Name"
          placeholder="Eg: Doe"
          name="lastName"
          value={data?.lastName}
          onChange={(e) => inputChangeHandler(e, setData)}
        />
        <Input
          label="Email"
          placeholder="Eg: example@gmail.com"
          type="email"
          name="email"
          value={data?.email}
          onChange={(e) => inputChangeHandler(e, setData)}
        />
        <Input
          label="Phone Number"
          placeholder="+234 12 345 6789"
          name="phone"
          value={data?.phone}
          onChange={(e) => inputChangeHandler(e, setData)}
        />
        <Input
          label="Address"
          placeholder="No. 4, B Close, A State"
          name="address"
          value={data?.address}
          onChange={(e) => inputChangeHandler(e, setData)}
        />
        <Dropdown
          label="Property Type"
          options={["Residential", "Corporate"]}
          title="Select "
          selected={propertyType || data?.propertyType}
          setSelected={setPropertyType}
        />

        <TextArea
          label="Talk to us"
          placeholder="Tell us what you want to achieve"
          name="comment"
          value={data?.comment}
          onChange={(e) => inputChangeHandler(e, setData)}
        />

        <div>
          <Button
            disabled={
              !data?.firstName ||
              !data?.lastName ||
              !data?.email ||
              !data?.phone ||
              !data?.address ||
              !data?.propertyType ||
              !data?.comment
            }
            onClick={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            loading={requestState?.isLoading}
          >
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default FleetInsuranceForm;
