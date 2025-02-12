import classes from "./PolicyReviewCard.module.css";

const PolicyReviewCard = () => {
  return (
    <div className={classes.policyReview}>
      <p>B</p>
      <div>
        <h4>Third Party Motor Insurance</h4>
        <p>₦100,000</p>
      </div>
      <div>
        <div style={{ width: `${80}%` }}></div>
      </div>
    </div>
  );
};

export default PolicyReviewCard;

// className="w-12 h-12 flex items-center justify-center bg-grey-300 rounded-full font-medium text-lg font-main"
//  className="font-normal text-base font-main"
// className="font-normal text-sm text-grey-200 font-main"
