import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import React from "react";
import CorporateHmoForm from "../CorporateHmoForm/CorporateHmoForm";
import CorporateHmoHero from "../CorporateHmoHero/CorporateHmoHero";

const CorporateHmo = () => {
  return (
    <ApppLayout>
      <CorporateHmoHero />
      <CorporateHmoForm />
    </ApppLayout>
  );
};

export default CorporateHmo;
