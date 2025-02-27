import Button from "@/components/Button/Button";
import classes from "../BuildingHero/BuildingHero.module.css";
import ArrowRight from "@/assets/svgIcons/ArrowRight";
import Image from "next/image";

const AllRiskHero = () => {
  return (
    <section className={classes.container}>
      <div>
        <h1>All Risks</h1>
        <p>
          All Risks Insurance provides broad coverage for loss or damage to
          insured property from various unforeseen events, except those
          specifically excluded.
        </p>
        <p>
          It offers more comprehensive protection than standard policies,
          covering risks like theft, fire, and accidental damage.
        </p>
        <Button>
          <span>Book Now</span>
          <ArrowRight />
        </Button>
      </div>
      <div>
        <Image
          src="https://res.cloudinary.com/dfilepe0f/image/upload/v1740666640/building2_duvnyh.jpg"
          width={500}
          height={500}
          alt="Hero Image"
        />
      </div>
    </section>
  );
};

export default AllRiskHero;
