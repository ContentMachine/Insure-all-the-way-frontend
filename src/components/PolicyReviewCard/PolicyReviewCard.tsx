import { userPoliciesType } from "@/utilities/types";
import classes from "./PolicyReviewCard.module.css";
import { capitalize, structureWords } from "@/helpers/capitalize";
import moment from "moment";

type PolicyReviewCardType = {
  data: userPoliciesType;
};

const PolicyReviewCard = ({ data }: PolicyReviewCardType) => {
  const difference = moment(data?.endDate).diff(data?.startDate, "d");

  const percentageDifference = (difference / 365) * 100;
  const progress = 100 - percentageDifference;

  return (
    <div className={classes.policyReview}>
      <p>{capitalize(data?.insuranceType?.substring(0, 1))}</p>
      <div>
        <h4>{structureWords(data?.insuranceType)}</h4>
      </div>
      <div>
        <div style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default PolicyReviewCard;
