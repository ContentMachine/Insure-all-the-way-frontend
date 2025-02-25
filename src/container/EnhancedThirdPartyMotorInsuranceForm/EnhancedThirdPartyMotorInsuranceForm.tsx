import classes from "./EnhancedThirdPartyMotorInsuranceForm.module.css";
import StepLayout from "@/components/StepLayout/StepLayout";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import EnhancedThordPartyMortrInsuranceForm1 from "./EnhancedThordPartyMortrInsuranceForm1";
import EnhancedThirdPartyMotorInsuranceForm2 from "./EnhancedThirdPartyMotorInsuranceForm2";
import EnhancedThirdPartyMotorInsuranceForm3 from "./EnhancedThirdPartyMotorInsuranceForm3";
import EnhancedThirdPartyMotorInsurancePreview from "./EnhancedThirdPartyMotorInsurancePreview";
import EnhancedThirdPartyMotorInsuranceForm0 from "./EnhancedThirdPartyMotorInsuranceForm0";
import { enhancedThirdPartyInsuranceFormTypes } from "@/utilities/types";
import { Dispatch, SetStateAction } from "react";

type EnhancedThirdPartyMotorInsuranceFormTypes = {
  data: enhancedThirdPartyInsuranceFormTypes;
  setData: Dispatch<SetStateAction<enhancedThirdPartyInsuranceFormTypes>>;
};

const EnhancedThirdPartyMotorInsuranceForm = ({
  data,
  setData,
}: EnhancedThirdPartyMotorInsuranceFormTypes) => {
  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  // Router
  const step = updateSearchParams("step", undefined, "get");

  // Utils
  const sectionsHeaders = [
    "Personal Information",
    "Vehicle Information",
    "Documents",
    "Inspection Appointment",
    "Preview",
    "Make Payment",
  ];

  console.log(data);

  let container;

  if (step === "2") {
    container = (
      <EnhancedThordPartyMortrInsuranceForm1 data={data} setData={setData} />
    );
  } else if (step === "3") {
    container = (
      <EnhancedThirdPartyMotorInsuranceForm2 data={data} setData={setData} />
    );
  } else if (step === "4") {
    container = <EnhancedThirdPartyMotorInsuranceForm3 />;
  } else if (step === "5") {
    container = <EnhancedThirdPartyMotorInsurancePreview />;
  } else {
    container = (
      <EnhancedThirdPartyMotorInsuranceForm0 data={data} setData={setData} />
    );
  }

  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h4>Enhanced Third Party Insurance Form</h4>
        <p>
          Please ensure that all your information is correctly filled in,
          failure to do so may render your policy void.
        </p>
      </div>

      <StepLayout
        steps={[1, 2, 3, 4, 5]}
        title={sectionsHeaders[Number(step) - 1]}
        notShowButton={Number(step) > 4}
        disabled={
          step === "1"
            ? !data?.firstName ||
              !data?.lastName ||
              !data?.email ||
              !data?.phoneNumber
            : step === "2"
            ? !data?.makeOfVehicle ||
              !data?.yearOfMake ||
              !data?.modelOfVehicle ||
              !data?.startDate ||
              !data?.endDate ||
              !data?.registrationNumber ||
              !data?.engineNumber ||
              !data?.chasisNumber ||
              !data?.color ||
              !data?.vehicleType
            : step === "3"
            ? !data?.proofOfOwnership || !data?.id
            : true
        }
      >
        {container}
      </StepLayout>
    </section>
  );
};

export default EnhancedThirdPartyMotorInsuranceForm;
