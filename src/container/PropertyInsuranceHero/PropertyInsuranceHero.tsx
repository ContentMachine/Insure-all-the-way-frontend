import Button from "@/components/Button/Button";
import classes from "../MotorInsuranceHero/MotorInsuranceHero.module.css";
import Image from "next/image";
import {
  MotorInsuranceHeroDecoration1,
  MotorInsuranceHeroDecoration2,
  MotorInsuranceHeroDecoration3,
} from "@/assets/svgIcons/MotorInsuranceHeroDecorations";
import Phone from "@/assets/svgIcons/Phone";
import Draft from "@/assets/svgIcons/Draft";

const PropertyInsuranceHero = () => {
  return (
    <section className={classes.container}>
      <div>
        <h1>
          Protect Your Home,<span>Secure Your Future </span>
        </h1>
        <p>
          Reliable property insurance for peace of mind—because your home
          deserves the best protection.
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
          src="https://res.cloudinary.com/dfilepe0f/image/upload/v1738932788/tierra-mallorca-rgJ1J8SDEAY-unsplash_ues3tn.jpg"
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

export default PropertyInsuranceHero;
