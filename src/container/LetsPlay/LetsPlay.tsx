import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import React from "react";
import LetsPlayHero from "../LetsPlayHero/LetsPlayHero";
import InsuranceTypes from "@/components/InsuranceTypes/InsuranceTypes";
import { letsPlay } from "@/utilities/motorInsurance";

const LetsPlay = () => {
  return (
    <ApppLayout>
      <LetsPlayHero />
      <InsuranceTypes data={letsPlay} />
    </ApppLayout>
  );
};

export default LetsPlay;
