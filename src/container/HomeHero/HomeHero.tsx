"use client";

import Image from "next/image";
import classes from "./HomeHero.module.css";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Phone from "@/assets/svgIcons/Phone";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";

const HomeHero = () => {
  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  return (
    <section className={classes.container}>
      <div>
        <h1>
          <span>Insurance</span> With A Difference
        </h1>
        <p>
          <b>Insure All The Way</b> provides you with quality insurance products
          and services.
        </p>

        <Button onClick={() => updateSearchParams("contact-us", "true", "set")}>
          <Phone />
          <span>Speak to an Agent</span>
        </Button>
      </div>
      <div>
        <Image
          src={
            "https://res.cloudinary.com/dfilepe0f/image/upload/v1740418277/IATW_Sub-banner_owq7qc.svg"
          }
          alt="Hero Image"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default HomeHero;
