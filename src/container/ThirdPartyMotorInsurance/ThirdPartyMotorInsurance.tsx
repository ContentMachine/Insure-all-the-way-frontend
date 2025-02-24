"use client";

import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import React, { useEffect, useMemo, useState } from "react";
import ThirdPartyMotorInsuranceHero from "../ThirdPartyMotorInsuranceHero/ThirdPartyMotorInsuranceHero";
import ThirdPartyInsuranceForm from "../ThirdPartyInsuranceForm/ThirdPartyInsuranceForm";
import { usePolicyTypeBySubtype } from "@/hooks/usePolicies";
import { requestType, thirdPartyInsuranceFormTypes } from "@/utilities/types";
import { requestHandler } from "@/helpers/requestHandler";
import useError from "@/hooks/useError";

const ThirdPartyMotorInsurance = () => {
  // Requests
  const { isLoading, data } = usePolicyTypeBySubtype(
    "motor-insurance",
    "third-party-motor-insurance"
  );

  // States
  const [requestState, setRequestState] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  });
  const [thirdPartyFormDataFormdata, setThirdPartyFormDataFormdata] = useState(
    new FormData()
  );

  // Hooks
  const { errorFlowFunction } = useError();

  // Memos
  const policySubType = useMemo(() => data?.data, [data]);

  // States
  const [thirdPartyFormData, setthirdPartyFormData] =
    useState<thirdPartyInsuranceFormTypes>({
      product: "",
      registrationNumber: "",
      chasisNumber: "",
      vehicleColor: "",
      roadWorthiness: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      state: "",
      startDate: "",
      endDate: "",
    });

  // Requests
  const thirdPartySubmissionFormHandler = () => {
    requestHandler({
      url: "/policies/policy/motor-insurance/third-party-motor-insurance",
      isMultipart: true,
      method: "POST",
      id: "submit-form",
      data: thirdPartyFormDataFormdata,
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

  // Effects
  useEffect(() => {
    const subThirdPartyFormData = new FormData();

    subThirdPartyFormData.append("plan", thirdPartyFormData?.product);
    subThirdPartyFormData.append(
      "registrationNumber",
      thirdPartyFormData?.registrationNumber
    );
    subThirdPartyFormData.append(
      "vehicleColor",
      thirdPartyFormData?.vehicleColor
    );
    subThirdPartyFormData.append(
      "chasisNumber",
      thirdPartyFormData?.chasisNumber
    );
    subThirdPartyFormData.append(
      "vehicleColor",
      thirdPartyFormData?.vehicleColor
    );
    subThirdPartyFormData.append(
      "roadWorthiness",
      thirdPartyFormData?.roadWorthiness
    );
    subThirdPartyFormData.append("firstName", thirdPartyFormData?.firstName);
    subThirdPartyFormData.append("lastName", thirdPartyFormData?.lastName);
    subThirdPartyFormData.append("email", thirdPartyFormData?.email);
    subThirdPartyFormData.append("phone", thirdPartyFormData?.phoneNumber);
    subThirdPartyFormData.append("address", thirdPartyFormData?.address);
    subThirdPartyFormData.append("startDate", thirdPartyFormData?.startDate);
    subThirdPartyFormData.append("endDate", thirdPartyFormData?.endDate);
    subThirdPartyFormData.append("state", thirdPartyFormData?.state);

    setThirdPartyFormDataFormdata(subThirdPartyFormData);
  }, [thirdPartyFormData]);

  return (
    <ApppLayout>
      <ThirdPartyMotorInsuranceHero
        data={policySubType}
        loading={isLoading}
        setData={setthirdPartyFormData}
      />
      <ThirdPartyInsuranceForm
        data={thirdPartyFormData}
        setData={setthirdPartyFormData}
        onSubmit={thirdPartySubmissionFormHandler}
        submitState={requestState}
        setSubmitState={setRequestState}
      />
    </ApppLayout>
  );
};

export default ThirdPartyMotorInsurance;
