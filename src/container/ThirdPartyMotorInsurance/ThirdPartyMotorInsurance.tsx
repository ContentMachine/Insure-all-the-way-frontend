import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import React from "react";
import ThirdPartyMotorInsuranceHero from "../ThirdPartyMotorInsuranceHero/ThirdPartyMotorInsuranceHero";
import ThirdPartyInsuranceForm from "../ThirdPartyInsuranceForm/ThirdPartyInsuranceForm";
import ContactUsBanner from "../ContactUsBanner/ContactUsBanner";

const ThirdPartyMotorInsurance = () => {
  return (
    <ApppLayout>
      <ThirdPartyMotorInsuranceHero />
      <ThirdPartyInsuranceForm />
    </ApppLayout>
  );
};

export default ThirdPartyMotorInsurance;
