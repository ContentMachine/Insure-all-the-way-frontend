"use client";

import RateCard from "@/components/RateCard/RateCard";
import classes from "./EnhancedThirdPartyMotorInsuranceHero.module.css";

const EnhancedThirdPartyMotorInsuranceHero = () => {
  return (
    <section className={classes.container}>
      <h1>
        You are 15 minutes away from getting your{" "}
        <span> Enhanced Third Party Motor Insurance!</span>
      </h1>
      <p>
        This insurance policy protects you from any damage or liability you
        cause to a third party, including accidental death or bodily injury.
      </p>

      <div className={classes.rateSection}>
        <RateCard />
        <RateCard />
      </div>

      <div></div>
      <div></div>
    </section>
  );
};

export default EnhancedThirdPartyMotorInsuranceHero;
