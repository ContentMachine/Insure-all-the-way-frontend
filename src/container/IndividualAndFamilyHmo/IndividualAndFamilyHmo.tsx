import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import classes from "./IndividualAndFamilyHmo.module.css";
import IndividualAndFamilyHmoHero from "../IndividualAndFamilyHmoHero/IndividualAndFamilyHmoHero";
import IndividualAndFamilyHmoSections from "../IndividualAndFamilyHmoSections/IndividualAndFamilyHmoSections";
import IndividualAndFamilyHmoPartners from "../IndividualAndFamilyHmoPartners/IndividualAndFamilyHmoPartners";
import IndividualAndFamilyHmoAbout from "../IndividualAndFamilyHmoAbout/IndividualAndFamilyHmoAbout";
import IndividualAndFamilyHmoForm from "../IndividualAndFamilyHmoForm/IndividualAndFamilyHmoForm";
import ContactUsBanner from "../ContactUsBanner/ContactUsBanner";

const IndividualAndFamilyHmo = () => {
  return (
    <ApppLayout className={classes.container}>
      <IndividualAndFamilyHmoHero />
      <IndividualAndFamilyHmoSections />
      <IndividualAndFamilyHmoPartners />
      <IndividualAndFamilyHmoAbout />
      <IndividualAndFamilyHmoForm />
      <ContactUsBanner />
    </ApppLayout>
  );
};

export default IndividualAndFamilyHmo;
