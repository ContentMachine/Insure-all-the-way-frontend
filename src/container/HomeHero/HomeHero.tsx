"use client";

import Image from "next/image";
import classes from "./HomeHero.module.css";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

const HomeHero = () => {
  // Utils
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 767 ? true : false;

  return (
    <section className={classes.container}>
      <div>
        <h1>
          <span>Insurance</span> With A Difference
        </h1>
        <p>
          <b>Insure All The Way</b> provides you with quality insurance products
          and services
        </p>

        <form className={classes.textSection}>
          <Input placeholder="Enter your Email" />
          <Button>Let's Talk</Button>
        </form>
      </div>
      <div>
        <Image
          src={
            isMobile
              ? "https://res.cloudinary.com/dfilepe0f/image/upload/v1739979253/IATW_Sub-banner_ww0ow0.svg"
              : "https://res.cloudinary.com/dfilepe0f/image/upload/v1740418277/IATW_Sub-banner_owq7qc.svg"
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
