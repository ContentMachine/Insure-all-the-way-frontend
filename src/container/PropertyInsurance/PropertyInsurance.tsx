import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import React from "react";
import PropertyInsuranceHero from "../PropertyInsuranceHero/PropertyInsuranceHero";
import InsuranceTypes from "@/components/InsuranceTypes/InsuranceTypes";
import { propertyInsuranceTypes } from "@/utilities/motorInsurance";
import ContactUsBanner from "../ContactUsBanner/ContactUsBanner";
import Faqs from "../Faqs/Faqs";

const PropertyInsurance = () => {
  return (
    <ApppLayout>
      <PropertyInsuranceHero />
      <InsuranceTypes data={propertyInsuranceTypes} />
      <ContactUsBanner
        title="Have questions about Property Insurance"
        caption="Have questions about property insurance? Contact us for expert advice and personalized coverage."
      />
      <Faqs />
    </ApppLayout>
  );
};

export default PropertyInsurance;
