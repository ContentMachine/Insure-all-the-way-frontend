import Image from "next/image";
import classes from "./ContactUsImages.module.css";

const ContactUsImages = () => {
  return (
    <section className={classes.container}>
      <Image
        src="https://res.cloudinary.com/dfilepe0f/image/upload/v1739787807/Get_in_touch_qcziia.webp"
        width={800}
        height={800}
        alt="Contact Us"
      />
    </section>
  );
};

export default ContactUsImages;
