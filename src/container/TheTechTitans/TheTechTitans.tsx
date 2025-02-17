import SectionsHero from "@/components/SectionsHero/SectionsHero";
import React from "react";
import LetsPlayVideoContainer from "../LetsPlayVideoContainer/LetsPlayVideoContainer";
import ApppLayout from "@/layouts/ApppLayout/ApppLayout";

const TheTechTitans = () => {
  return (
    <ApppLayout>
      <SectionsHero title="The Tech Titans Tournament" />
      <LetsPlayVideoContainer
        title="The Tech Titans Tournament"
        url="https://www.youtube.com/embed/SRXuovwtOuY?si=NPalDHzLetGQ4BBQ"
      />
    </ApppLayout>
  );
};

export default TheTechTitans;
