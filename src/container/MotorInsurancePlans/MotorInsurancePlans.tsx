import React from "react";
import classes from "./MotorInsurancePlans.module.css";
import RateCard from "@/components/RateCard/RateCard";

const MotorInsurancePlans = () => {
  return (
    <section className={classes.container} id="plans">
      <h4>
        Here's an overview of our <span>Motor Insurance plans</span>
      </h4>

      <div className={classes.plansContainer}>
        <RateCard theme="#a7c7e7" />
        <RateCard theme="#ababab" />
        <RateCard theme="#edd014" />
      </div>
    </section>
  );
};

export default MotorInsurancePlans;
