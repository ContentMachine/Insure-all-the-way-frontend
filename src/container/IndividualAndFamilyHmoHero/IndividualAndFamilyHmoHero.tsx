import Button from "@/components/Button/Button";
import classes from "./IndividualAndFamilyHmoHero.module.css";
import ArrowRight from "@/assets/svgIcons/ArrowRight";
import Image from "next/image";

const IndividualAndFamilyHmoHero = () => {
  return (
    <section className={classes.container}>
      <div>
        <h1>Individual & Family HMO</h1>
        <p>
          Welcome to our Individual & Family HMO plans, designed to provide
          comprehensive, affordable healthcare for you and your loved ones.
        </p>
        <Button>
          <span>Book Now</span>
          <ArrowRight />
        </Button>
      </div>
      <div>
        <Image
          src="https://res.cloudinary.com/dfilepe0f/image/upload/v1739275891/Group_76_zmpvh8.svg"
          width={500}
          height={500}
          alt="Hero Image"
        />
      </div>
    </section>
  );
};

export default IndividualAndFamilyHmoHero;
