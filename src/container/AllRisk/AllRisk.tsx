import AllRiskForm from "../AllRiskForm/AllRiskForm";
import AllRiskHero from "../AllRiskHero/AllRiskHero";
import ApppLayout from "@/layouts/ApppLayout/ApppLayout";

const AllRisk = () => {
  return (
    <ApppLayout>
      <AllRiskHero />;
      <AllRiskForm />
    </ApppLayout>
  );
};

export default AllRisk;
