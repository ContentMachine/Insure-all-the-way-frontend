"use client";

import Button from "@/components/Button/Button";
import classes from "./BuildingHero.module.css";
import ArrowRight from "@/assets/svgIcons/ArrowRight";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BuildingHero = () => {
  // Router
  const router = useRouter();
  return (
    <section className={classes.container}>
      <div>
        <h1>Building</h1>
        <p>
          Building Insurance covers the structure of a property, including
          walls, roofs, and permanent fixtures, against risks like fire, storms,
          and vandalism.
        </p>
        <p>
          It ensures property owners can repair or rebuild after damage but
          doesn’t cover contents inside, which require separate insurance
        </p>
        <Button onClick={() => router.push("#insurance-form")}>
          <span>Book Now</span>
          <ArrowRight />
        </Button>
      </div>
      <div>
        <Image
          src="https://res.cloudinary.com/dfilepe0f/image/upload/v1741178154/Building_PI_xttlo9.svg"
          width={500}
          height={500}
          alt="Hero Image"
        />
      </div>
    </section>
  );
};

export default BuildingHero;
