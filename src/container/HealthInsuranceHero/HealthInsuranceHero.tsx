import Button from "@/components/Button/Button";
import Image from "next/image";
import {
  MotorInsuranceHeroDecoration1,
  MotorInsuranceHeroDecoration2,
  MotorInsuranceHeroDecoration3,
} from "@/assets/svgIcons/MotorInsuranceHeroDecorations";
import classes from "../MotorInsuranceHero/MotorInsuranceHero.module.css";

const HealthInsuranceHero = () => {
  return (
    <section className={classes.container}>
      <div>
        <h1>
          Health is Wealth <span>Invest In Yours Today</span>
        </h1>
        <p>
          Cover your family from uncertainity with reliable health insurance.
        </p>

        <div>
          <Button>Get Started</Button>
          <Button type="null">Choose a Plan</Button>
        </div>
      </div>

      <div>
        <Image
          src="https://res.cloudinary.com/dfilepe0f/image/upload/v1738947903/Health_Insurance_Hero_Image_txsl9f.svg"
          height={500}
          width={300}
          alt="Motor Insurance"
        />
        <MotorInsuranceHeroDecoration1 />
        <MotorInsuranceHeroDecoration2 />
        <MotorInsuranceHeroDecoration3 />
      </div>
    </section>
  );
};

export default HealthInsuranceHero;
