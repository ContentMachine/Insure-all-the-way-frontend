import Button from "@/components/Button/Button";
import classes from "./ComprehensiveMotorInsuranceHero.module.css";
import Image from "next/image";
import {
  MotorInsuranceHeroDecoration1,
  MotorInsuranceHeroDecoration2,
  MotorInsuranceHeroDecoration3,
} from "@/assets/svgIcons/MotorInsuranceHeroDecorations";
import CheckCircle from "@/assets/svgIcons/CheckCircle";

const stepsInfo = [
  "Fill out the Comprehensive Motor Insurance Form and get a quote",
  "Make a payment",
  "Complete our Insurance Proposal Form, and you are Insured all the way!",
];

const ComprehensiveMotorInsuranceHero = () => {
  return (
    <section className={classes.container}>
      <h1>
        Buy our comprehensive policy and get a gift and{" "}
        <span>Added-value Services</span> as a reward for your trust.
      </h1>

      {stepsInfo.map((data, i) => {
        return (
          <p key={i}>
            <CheckCircle />
            <span>{data}</span>
          </p>
        );
      })}

      <Button>Buy Now</Button>
    </section>
  );
};

export default ComprehensiveMotorInsuranceHero;
