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
      <h4>{title || "Any Questions? Give Us a Call"}</h4>

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
        <Button
          type="tertiary"
          onClick={() => {
            router.push(routes.CONTACT_US);
          }}
        >
          <Phone />
          <span>Call Us</span>
        </Button>
      </div>
    </section>
  );
};

export default ContactUsBanner;
