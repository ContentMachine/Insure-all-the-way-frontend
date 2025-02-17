"use client";

import Button from "@/components/Button/Button";
import classes from "./ContactUsBanner.module.css";
import Image from "next/image";
import Phone from "@/assets/svgIcons/Phone";
import { useRouter } from "next/navigation";
import { routes } from "@/utilities/routes";

type ContactUsBannerTypes = {
  title?: string;
  caption?: string;
};

const ContactUsBanner = ({ title, caption }: ContactUsBannerTypes) => {
  // ROuter
  const router = useRouter();
  return (
    <section className={classes.container}>
      <h4
        dangerouslySetInnerHTML={{
          __html: title || "Any Questions? <span>Give us a call.</span>",
        }}
      ></h4>

      <div className={classes.imageContainer}>
        <Image
          src="https://res.cloudinary.com/dfilepe0f/image/upload/v1738947902/Footer_element_djosso.svg"
          alt="Background Image"
          width={200}
          height={500}
        />
      </div>

      <div>
        <p>
          {caption ||
            "Ready to transform your digital dresence? Let's create magic together! book our services now!"}
        </p>
        <Button type="tertiary">
          <Phone />
          <a href="tel:+2348095016666">Call Us</a>
        </Button>
      </div>
    </section>
  );
};

export default ContactUsBanner;
