import Button from "@/components/Button/Button";
import classes from "./MotorInsuranceHero.module.css";
import Image from "next/image";
import {
  MotorInsuranceHeroDecoration1,
  MotorInsuranceHeroDecoration2,
  MotorInsuranceHeroDecoration3,
} from "@/assets/svgIcons/MotorInsuranceHeroDecorations";

const MotorInsuranceHero = () => {
  return (
    <section className={classes.container}>
      <div>
        <h1>
          Drive with <span>Confidence</span>
        </h1>
        <p>
          Drive confidently with coverage for damage, flood, fire and and theft.
        </p>

        <div>
          <Button>Get Started</Button>
          <Button type="null">Choose a Plan</Button>
        </div>
      </div>

      <div>
        <Image
          src="https://res.cloudinary.com/dfilepe0f/image/upload/v1738947903/Car_Insurance_Hero_Image_t3gbim.svg"
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

export default MotorInsuranceHero;
