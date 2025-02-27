import Button from "@/components/Button/Button";
import classes from "./CorporateHmoHero.module.css";
import Image from "next/image";
import ArrowRight from "@/assets/svgIcons/ArrowRight";

const CorporateHmoHero = () => {
  return (
    <section className={classes.container}>
      <div>
        <h1>
          Providing Quality Health Insurance For{" "}
          <span> Corporate & Small Businesses </span>
        </h1>
        <p>
          A health insurance plan from us will make your employees healthier and
          more productive.
        </p>
        <Button>
          <span>Get a Quote</span>
          <ArrowRight />
        </Button>
      </div>
      <div>
        <Image
          src="https://res.cloudinary.com/dfilepe0f/image/upload/v1739811414/Patient-centered_Care_2_bc3rbn.svg"
          width={800}
          height={400}
          alt="Corporate HMO"
        />
      </div>
    </section>
  );
};

export default CorporateHmoHero;
