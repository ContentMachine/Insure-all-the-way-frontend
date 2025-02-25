import PolicyReviewCard from "@/components/PolicyReviewCard/PolicyReviewCard";
import classes from "./DashboardPoliciesReview.module.css";
import { userPoliciesType } from "@/utilities/types";

type DashboardPoliciesReviewType = {
  userPolicies: userPoliciesType[];
};

const DashboardPoliciesReview = ({
  userPolicies,
}: DashboardPoliciesReviewType) => {
  return (
    <section className={classes.container}>
      <h2>Existing Policies</h2>

      {userPolicies?.map((data) => {
        return <PolicyReviewCard data={data} key={data?._id} />;
      })}
    </section>
  );
};

export default DashboardPoliciesReview;
