import Button from "@/components/Button/Button";
import classes from "./PolicyInformationModalBody.module.css";
import Phone from "@/assets/svgIcons/Phone";
import Close from "@/assets/svgIcons/Close";
import Draft from "@/assets/svgIcons/Draft";
import { useUserPolicyById } from "@/hooks/usePolicies";
import { userPoliciesType } from "@/utilities/types";
import { useMemo } from "react";
import Loader from "@/components/Loader/Loader";
import { structureWords } from "@/helpers/capitalize";
import moment from "moment";

type PolicyInformationModalBodyTypes = {
  onClose?: () => void;
  id: string;
};

const PolicyInformationModalBody = ({
  onClose,
  id,
}: PolicyInformationModalBodyTypes) => {
  // Requests
  const { isLoading, data } = useUserPolicyById(id);

  // MEmos
  const policyInfo: userPoliciesType = useMemo(
    () => data?.data?.policy,
    [data]
  );

  console.log(data, "Infooo");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={classes.container}>
      <Close onClick={onClose} />
      <h2>Policy Information</h2>

      <div className={classes.body}>
        <div>
          <h4>Policy Held</h4>
          <p>{structureWords(policyInfo?.insuranceType)}</p>
        </div>

        <div>
          <h4>Expiration Date</h4>
          <p>{moment(policyInfo?.endDate)?.format("Do MMMM, YYYY")}</p>
        </div>

        <div>
          <h4>Agent</h4>
          <p>{policyInfo?.agent || "N/A"}</p>
        </div>

        <div>
          <h4>Status</h4>
          <p>{policyInfo?.status || "N/A"}</p>
        </div>
      </div>

      <div className={classes.buttonContainer}>
        <Button type="bordered" onClick={onClose}>
          <Phone />
          <span>Speak to an Agent</span>
        </Button>
        <Button>
          <Draft />
          <span>File a Claim</span>
        </Button>
      </div>
    </div>
  );
};

export default PolicyInformationModalBody;
