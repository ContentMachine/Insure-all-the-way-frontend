import Button from "@/components/Button/Button";
import classes from "./LetsPlayHero.module.css";
import Play from "@/assets/svgIcons/Play";
import Image from "next/image";
import {
  MotorInsuranceHeroDecoration1,
  MotorInsuranceHeroDecoration2,
  MotorInsuranceHeroDecoration3,
} from "@/assets/svgIcons/MotorInsuranceHeroDecorations";

const LetsPlayHero = () => {
  return (
    <section className={classes.container}>
      <div>
        <h1>Why We Do It...</h1>
        <p>
          Health is a good idea, living an active lifestyle is better! That’s
          why we routinely organise and participate in health related events.
          Let’s not just talk about good health, let’s be about good health.
        </p>

        <div className={classes.buttonSection}>
          <Button>
            <Play />
            <span>Look at our Events</span>
          </Button>
        </div>
      </div>

      <div>
        <Image
          src="https://res.cloudinary.com/dfilepe0f/image/upload/v1738947903/Health_Insurance_Hero_Image_txsl9f.svg"
          height={500}
          width={300}
          alt="Motor Insurance"
        />
        <MotorInsuranceHeroDecoration1 color="#a7c7e7" />
        <MotorInsuranceHeroDecoration2 color="#a7c7e7" />
        <MotorInsuranceHeroDecoration3 color="#a7c7e7" />
      </div>
    </section>
  );
};

export default LetsPlayHero;
