import Button from "@/components/Button/Button";
import classes from "./CorporateHmoHero.module.css";
import Image from "next/image";

const CorporateHmoHero = () => {
  return (
    <section className={classes.container}>
      <h1>
        Providing Quality Health Insurance For{" "}
        <span> Corporate & Small Businesses </span>
      </h1>
      <p>
        A health insurance plan from us will make your employees happier and
        healthier.
      </p>

      <Image
        src="https://res.cloudinary.com/dfilepe0f/image/upload/v1739289788/corporateHmo_xnjukm.jpg"
        width={800}
        height={400}
        alt="Corporate HMO"
      />

      <Button>Get a Quote</Button>
    </section>
  );
};

export default CorporateHmoHero;
