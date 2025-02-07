import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import React from "react";
import MotorInsuranceHero from "../MotorInsuranceHero/MotorInsuranceHero";
import InsuranceTypes from "@/components/InsuranceTypes/InsuranceTypes";
import { motorInsuranceTypes } from "@/utilities/motorInsurance";
import ContactUsBanner from "../ContactUsBanner/ContactUsBanner";
import Faqs from "../Faqs/Faqs";
import classes from "./MotorInsurance.module.css";

const MotorInsurance = () => {
  return (
    <ApppLayout>
      <MotorInsuranceHero />
      <InsuranceTypes data={motorInsuranceTypes} />
      <div className={classes.contact}>
        <ContactUsBanner
          title="Let's Talk Motor Insurance"
          caption="Speak to an agent now to find out about our motor insurance policies. No need to stress. Sit back and enjoy the ride. We have got you covered"
        />
      </div>
      <Faqs />
    </ApppLayout>
  );
};

export default MotorInsurance;
