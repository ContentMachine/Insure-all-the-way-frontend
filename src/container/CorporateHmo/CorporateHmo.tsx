import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import classes from "../IndividualAndFamilyHmo/IndividualAndFamilyHmo.module.css";
import CorporateHmoForm from "../CorporateHmoForm/CorporateHmoForm";
import CorporateHmoHero from "../CorporateHmoHero/CorporateHmoHero";
import CorporateHmoFeatures from "../CorporateHmoFeatures/CorporateHmoFeatures";

const CorporateHmo = () => {
  return (
    <ApppLayout className={classes.container}>
      <CorporateHmoHero />
      <CorporateHmoFeatures />
      <CorporateHmoForm />
    </ApppLayout>
  );
};

export default CorporateHmo;
