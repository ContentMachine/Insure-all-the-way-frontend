import React, { useMemo } from "react";
import classes from "./PaymentModalBody.module.css";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Close from "@/assets/svgIcons/Close";
import {
  policySubTypePlansType,
  thirdPartyInsuranceFormTypes,
} from "@/utilities/types";
import { usePolicyTypeBySubtype } from "@/hooks/usePolicies";
import Loader from "@/components/Loader/Loader";
import { formatCurrency } from "@/helpers/formatAmount";

type PaymentModalBodyType = {
  onSuccess: () => void;
  data: thirdPartyInsuranceFormTypes;
};

const PaymentModalBody = ({ onSuccess, data }: PaymentModalBodyType) => {
  // Requests
  const { isLoading, data: policySubtypeData } = usePolicyTypeBySubtype(
    "motor-insurance",
    "third-party-motor-insurance"
  );

  // Memos
  const policyData = useMemo(
    () =>
      policySubtypeData?.data?.plans?.find(
        (plan: policySubTypePlansType) => plan?.name === data?.product
      ),
    [policySubtypeData]
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={classes.container}>
      <Close />
      <h4>Please confirm your payment details</h4>

      <Input
        label="Fullname"
        placeholder="Eg. John Doe"
        readOnly
        value={`${data?.firstName} ${data?.lastName}`}
      />
      <Input
        label="Email"
        placeholder="Eg abc@example.com"
        readOnly
        value={data?.email}
      />
      <Input label="Phone" type="phone" readOnly value={data?.phoneNumber} />
      <Input
        label="Amount"
        readOnly
        value={`₦${formatCurrency(policyData?.price)}`}
      />

      <Button type="secondary" onClick={onSuccess}>
        Pay
      </Button>
    </div>
  );
};

export default PaymentModalBody;
