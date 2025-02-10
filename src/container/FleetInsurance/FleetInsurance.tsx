import React from "react";
import FleetInsuranceHero from "../FleetInsuranceHero/FleetInsuranceHero";
import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import FleetInsuranceForm from "../FleetInsuranceForm/FleetInsuranceForm";

const FleetInsurance = () => {
  return (
    <ApppLayout>
      <FleetInsuranceHero />
      <FleetInsuranceForm />
    </ApppLayout>
  );
};

export default FleetInsurance;
