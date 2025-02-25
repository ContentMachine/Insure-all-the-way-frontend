"use client";

import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import EnhancedThirdPartyMotorInsuranceHero from "../EnhancedThirdPartyMotorInsuranceHero/EnhancedThirdPartyMotorInsuranceHero";
import EnhancedThirdPartyMotorInsuranceForm from "../EnhancedThirdPartyMotorInsuranceForm/EnhancedThirdPartyMotorInsuranceForm";
import { useEffect, useMemo, useState } from "react";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { usePolicyTypeBySubtype } from "@/hooks/usePolicies";
import { vehicleTypes } from "@/utilities/motorInsuranceData";
import { requestHandler } from "@/helpers/requestHandler";
import useError from "@/hooks/useError";
import {
  enhancedThirdPartyInsuranceFormTypes,
  requestType,
} from "@/utilities/types";

const EnhancedThirdPartyMotorInsurance = () => {
  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();
  const { isLoading, data } = usePolicyTypeBySubtype(
    "motor-insurance",
    "enhanced-third-party-motor-insurance"
  );
  const [enhancedThirdPartyFormData, setEnhancedThirdPartyFormData] =
    useState<enhancedThirdPartyInsuranceFormTypes>({
      makeOfVehicle: "",
      yearOfMake: "",
      modelOfVehicle: "",
      startDate: "",
      endDate: "",
      registrationNumber: "",
      engineNumber: "",
      chasisNumber: "",
      color: "",
      vehicleType: "",
      proofOfOwnership: null,
      plan: "",
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      state: "",
    });

  const [requestState, setRequestState] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  });

  // Hooks
  const { errorFlowFunction } = useError();

  const [
    enhancedThirdPartyFormDataFormdata,
    setEnhancedThirdPartyFormDataFormdata,
  ] = useState(new FormData());

  // Requests
  const enhancedThirdPartySubmissionFOrmHandler = () => {
    requestHandler({
      url: "/policies/policy/motor-insurance/third-party-motor-insurance",
      isMultipart: true,
      method: "POST",
      id: "submit-form",
      data: enhancedThirdPartyFormDataFormdata,
      state: requestState,
      setState: setRequestState,
      successFunction(res) {
        console.log(res);
      },
      errorFunction(err) {
        console.log(err);
        errorFlowFunction(err);
      },
    });
  };

  // MEmos
  const policySubType = useMemo(() => data?.data, [data]);

  console.log(policySubType, "Ppp");

  // Effects
  useEffect(() => {
    if (typeof window !== "undefined") {
      updateSearchParams("step", "1", "set");
    }
  }, []);

  useEffect(() => {
    const subEnhancedThirdPartyFormData = new FormData();

    subEnhancedThirdPartyFormData.append(
      "makeOfVehicle",
      enhancedThirdPartyFormData?.makeOfVehicle
    );
    subEnhancedThirdPartyFormData.append(
      "yearOfMake",
      enhancedThirdPartyFormData?.yearOfMake
    );
    subEnhancedThirdPartyFormData.append(
      "startDate",
      enhancedThirdPartyFormData?.startDate
    );
    subEnhancedThirdPartyFormData.append(
      "endDate",
      enhancedThirdPartyFormData?.endDate
    );
    subEnhancedThirdPartyFormData.append(
      "registrationNumber",
      enhancedThirdPartyFormData?.registrationNumber
    );
    subEnhancedThirdPartyFormData.append(
      "engineNumber",
      enhancedThirdPartyFormData?.engineNumber
    );

    subEnhancedThirdPartyFormData.append(
      "chasisNumber",
      enhancedThirdPartyFormData?.chasisNumber
    );
    subEnhancedThirdPartyFormData.append(
      "color",
      enhancedThirdPartyFormData?.color
    );
    subEnhancedThirdPartyFormData.append(
      "vehicleType",
      enhancedThirdPartyFormData?.vehicleType
    );
    subEnhancedThirdPartyFormData.append(
      "proofOfOwnership",
      enhancedThirdPartyFormData?.proofOfOwnership as File
    );
    subEnhancedThirdPartyFormData.append(
      "plan",
      enhancedThirdPartyFormData?.plan
    );
    subEnhancedThirdPartyFormData.append(
      "id",
      enhancedThirdPartyFormData?.id as File
    );

    subEnhancedThirdPartyFormData.append(
      "firstName",
      enhancedThirdPartyFormData?.firstName
    );
    subEnhancedThirdPartyFormData.append(
      "lastName",
      enhancedThirdPartyFormData?.lastName
    );
    subEnhancedThirdPartyFormData.append(
      "email",
      enhancedThirdPartyFormData?.email
    );
    subEnhancedThirdPartyFormData.append(
      "phone",
      enhancedThirdPartyFormData?.phoneNumber
    );
    subEnhancedThirdPartyFormData.append(
      "address",
      enhancedThirdPartyFormData?.address
    );
    subEnhancedThirdPartyFormData.append(
      "startDate",
      enhancedThirdPartyFormData?.startDate
    );
    subEnhancedThirdPartyFormData.append(
      "endDate",
      enhancedThirdPartyFormData?.endDate
    );
    subEnhancedThirdPartyFormData.append(
      "state",
      enhancedThirdPartyFormData?.state
    );

    setEnhancedThirdPartyFormDataFormdata(subEnhancedThirdPartyFormData);
  }, [enhancedThirdPartyFormData]);

  return (
    <ApppLayout>
      <EnhancedThirdPartyMotorInsuranceHero
        data={policySubType}
        loading={isLoading}
        setData={setEnhancedThirdPartyFormData}
      />
      <EnhancedThirdPartyMotorInsuranceForm
        data={enhancedThirdPartyFormData}
        setData={setEnhancedThirdPartyFormData}
      />
    </ApppLayout>
  );
};

export default EnhancedThirdPartyMotorInsurance;
