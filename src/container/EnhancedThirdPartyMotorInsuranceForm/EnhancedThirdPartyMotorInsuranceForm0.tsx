import Input from "@/components/Input/Input";
import { AuthContext } from "@/context/AuthContext";
import { inputChangeHandler } from "@/helpers/inputChangeHandler";
import { enhancedThirdPartyInsuranceFormTypes } from "@/utilities/types";
import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";

type EnhancedThordPartyMortrInsuranceForm0Types = {
  data: enhancedThirdPartyInsuranceFormTypes;
  setData: Dispatch<SetStateAction<enhancedThirdPartyInsuranceFormTypes>>;
};

const EnhancedThirdPartyMotorInsuranceForm0 = ({
  data,
  setData,
}: EnhancedThordPartyMortrInsuranceForm0Types) => {
  // Context
  const { user } = useContext(AuthContext);

  // Effects
  useEffect(() => {
    if (user) {
      setData((prevState) => {
        return {
          ...prevState,
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.email,
          phoneNumber: user?.phone,
          address: user?.address,
          state: user?.state,
        };
      });
    }
  }, [user]);

  return (
    <form>
      <Input
        label="First name"
        placeholder="Eg. John"
        value={data?.firstName}
        onChange={(e) => inputChangeHandler(e, setData)}
        name="firstName"
      />
      <Input
        label="Last name"
        placeholder="Eg. Doe"
        value={data?.lastName}
        onChange={(e) => inputChangeHandler(e, setData)}
        name="lastName"
      />
      <Input
        label="Email Address"
        placeholder="Eg. abc@example.com"
        type="email"
        value={data?.email}
        onChange={(e) => inputChangeHandler(e, setData)}
        name="email"
      />
      <Input
        label="Phone Number"
        type="phone"
        placeholder="Eg. +123 456 789 0"
        value={data?.phoneNumber}
        onChange={(e) => inputChangeHandler(e, setData)}
        name="phoneNumber"
      />
    </form>
  );
};

export default EnhancedThirdPartyMotorInsuranceForm0;
