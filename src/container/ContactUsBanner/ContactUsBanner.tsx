import Button from "@/components/Button/Button";
import classes from "./ContactUsBanner.module.css";
import Image from "next/image";

const ContactUsBanner = () => {
  return (
    <section className={classes.container}>
      <h4>
        Have Questions? <br />
        Speak to us
      </h4>

      <div className={classes.imageContainer}>
        <Image
          src="https://res.cloudinary.com/dfilepe0f/image/upload/v1738834928/contactBg_gbos1j.svg"
          alt="Background Image"
          width={200}
          height={500}
        />
      </div>

      <div>
        <p>
          Ready to transform your digital dresence? Let's create magic together!
          book our services now!
        </p>
        <Button type="tertiary">Book Call</Button>
      </div>
    </section>
  );
};

export default ContactUsBanner;
