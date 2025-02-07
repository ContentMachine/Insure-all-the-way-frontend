import RateCard from "@/components/RateCard/RateCard";
import classes from "./ThirdPartyMotorInsuranceHero.module.css";

const ThirdPartyMotorInsuranceHero = () => {
  return (
    <section className={classes.container}>
      <h1>
        You are 3 minutes away from getting your{" "}
        <span> Third Party Motor Insurance!</span>
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

export default ThirdPartyMotorInsuranceHero;
