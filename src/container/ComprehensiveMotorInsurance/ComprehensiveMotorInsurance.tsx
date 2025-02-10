import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import classes from "./ComprehensiveMotorInsurance.module.css";
import ComprehensiveMotorInsuranceHero from "../ComprehensiveMotorInsuranceHero/ComprehensiveMotorInsuranceHero";
import ComprehensiveMotorInsuranceForm from "../ComprehensiveMotorInsuranceForm/ComprehensiveMotorInsuranceForm";

const ComprehensiveMotorInsurance = () => {
  return (
    <ApppLayout>
      <ComprehensiveMotorInsuranceHero />
      <ComprehensiveMotorInsuranceForm />
    </ApppLayout>
  );
};

export default ComprehensiveMotorInsurance;
