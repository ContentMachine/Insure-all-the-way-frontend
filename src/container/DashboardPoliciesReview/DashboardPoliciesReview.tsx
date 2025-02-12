import PolicyReviewCard from "@/components/PolicyReviewCard/PolicyReviewCard";
import classes from "./DashboardPoliciesReview.module.css";

const DashboardPoliciesReview = () => {
  return (
    <section className={classes.container}>
      <h2>Existing Policies</h2>

      <PolicyReviewCard />
      <PolicyReviewCard />
      <PolicyReviewCard />
      <PolicyReviewCard />
      <PolicyReviewCard />
    </section>
  );
};

export default DashboardPoliciesReview;
