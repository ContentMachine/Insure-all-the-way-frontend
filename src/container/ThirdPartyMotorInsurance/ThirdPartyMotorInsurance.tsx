"use client";

import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import React, { useEffect, useMemo, useState } from "react";
import ThirdPartyMotorInsuranceHero from "../ThirdPartyMotorInsuranceHero/ThirdPartyMotorInsuranceHero";
import ThirdPartyInsuranceForm from "../ThirdPartyInsuranceForm/ThirdPartyInsuranceForm";
import { usePolicyTypeBySubtype } from "@/hooks/usePolicies";
import { requestType, thirdPartyInsuranceFormTypes } from "@/utilities/types";
import { requestHandler } from "@/helpers/requestHandler";

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

  const [thirdPartyFormDataFormdata, setThirdPartyFormDataFormdata] = useState(
    new FormData()
  );

  // Requests
  const thirdPartySubmissionFormHandler = () => {
    requestHandler({
      url: "/policies/policy/motor-insurance/third-party-motor-insurance",
      method: "POST",
      data: thirdPartyFormDataFormdata,
      state: requestState,
      setState: setRequestState,
      successFunction(res) {
        console.log(response);
      },
    });
  };

  // Effects
  useEffect(() => {
    const subThirdPartyFormData = new FormData();

    subThirdPartyFormData.append("product", thirdPartyFormData?.product);
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
    subThirdPartyFormData.append(
      "phoneNumber",
      thirdPartyFormData?.phoneNumber
    );
    subThirdPartyFormData.append("address", thirdPartyFormData?.address);
    subThirdPartyFormData.append("startDate", thirdPartyFormData?.startDate);
    subThirdPartyFormData.append("endDate", thirdPartyFormData?.endDate);

    setThirdPartyFormDataFormdata(subThirdPartyFormData);
  }, [thirdPartyFormDataFormdata]);

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
      />
    </ApppLayout>
  );
};

export default ThirdPartyMotorInsurance;
