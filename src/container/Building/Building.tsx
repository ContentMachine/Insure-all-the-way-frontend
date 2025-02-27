import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import React from "react";
import BuildingHero from "../BuildingHero/BuildingHero";
import BuildingForm from "../BuildingForm/BuildingForm";

const Building = () => {
  return (
    <ApppLayout>
      <BuildingHero />
      <BuildingForm />
    </ApppLayout>
  );
};

export default Building;
