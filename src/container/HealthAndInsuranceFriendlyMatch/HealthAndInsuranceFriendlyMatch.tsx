import SectionsHero from "@/components/SectionsHero/SectionsHero";
import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import React from "react";
import LetsPlayVideoContainer from "../LetsPlayVideoContainer/LetsPlayVideoContainer";

const HealthAndInsuranceFriendlyMatch = () => {
  return (
    <ApppLayout>
      <SectionsHero title="Health and Insurance Friendly Match" />
      <LetsPlayVideoContainer
        title="Health and Insurance Friendly Match"
        url="https://www.youtube.com/embed/SRXuovwtOuY?si=NPalDHzLetGQ4BBQ"
      />
    </ApppLayout>
  );
};

export default HealthAndInsuranceFriendlyMatch;
