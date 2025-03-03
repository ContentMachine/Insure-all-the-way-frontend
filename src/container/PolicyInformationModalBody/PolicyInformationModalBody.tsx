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
import { formatObject } from "@/helpers/validateObjectValues";

type PolicyInformationModalBodyTypes = {
  onClose?: () => void;
  id: string;
  onClaim: () => void;
};

const PolicyInformationModalBody = ({
  onClose,
  id,
  onClaim,
}: PolicyInformationModalBodyTypes) => {
  // Requests
  const { isLoading, data } = useUserPolicyById(id);

  // MEmos
  const policyInfo: { title: string; value: string }[] | undefined =
    useMemo(() => {
      if (data?.data) {
        return formatObject(data?.data?.policy, [
          "_id",
          "__v",
          "user",
          "createdAt",
        ]);
      }
    }, [data]);

  console.log(policyInfo, 1000);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={classes.container}>
      <Close onClick={onClose} />
      <h2>Policy Information</h2>

      <div className={classes.body}>
        {policyInfo?.map((data, i) => {
          return (
            <div key={i}>
              <h4>{data?.title}</h4>
              <p>{structureWords(data?.value)}</p>
            </div>
          );
        })}
      </div>

      <div className={classes.buttonContainer}>
        <Button type="bordered" onClick={onClose}>
          <Phone />
          <span>Speak to an Agent</span>
        </Button>
        <Button onClick={onClaim}>
          <Draft />
          <span>File a Claim</span>
        </Button>
      </div>
    </div>
  );
};

export default PolicyInformationModalBody;
