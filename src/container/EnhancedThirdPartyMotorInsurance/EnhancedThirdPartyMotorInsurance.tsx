"use client";

import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import EnhancedThirdPartyMotorInsuranceHero from "../EnhancedThirdPartyMotorInsuranceHero/EnhancedThirdPartyMotorInsuranceHero";
import EnhancedThirdPartyMotorInsuranceForm from "../EnhancedThirdPartyMotorInsuranceForm/EnhancedThirdPartyMotorInsuranceForm";
import { useEffect } from "react";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";

const EnhancedThirdPartyMotorInsurance = () => {
  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  // Effects
  useEffect(() => {
    if (typeof window !== "undefined") {
      updateSearchParams("step", "1", "set");
    }
  }, []);

  return (
    <ApppLayout>
      <EnhancedThirdPartyMotorInsuranceHero />
      <EnhancedThirdPartyMotorInsuranceForm />
    </ApppLayout>
  );
};

export default EnhancedThirdPartyMotorInsurance;
