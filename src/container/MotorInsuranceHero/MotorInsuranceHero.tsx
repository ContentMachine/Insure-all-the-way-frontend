import Button from "@/components/Button/Button";
import classes from "./MotorInsuranceHero.module.css";
import Image from "next/image";
import {
  MotorInsuranceHeroDecoration1,
  MotorInsuranceHeroDecoration2,
  MotorInsuranceHeroDecoration3,
} from "@/assets/svgIcons/MotorInsuranceHeroDecorations";
import Phone from "@/assets/svgIcons/Phone";
import Draft from "@/assets/svgIcons/Draft";

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

        <div className={classes.buttonSection}>
          <Button>
            <Phone />
            <span>Speak to an Agent</span>
          </Button>
          <Button type="null">
            <span>Choose a Plan </span>
            <Draft />
          </Button>
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
