import Image from "next/image";
import classes from "./IndividualAndFamilyHmoAbout.module.css";
import Button from "@/components/Button/Button";

const IndividualAndFamilyHmoAbout = () => {
  return (
    <section className={classes.outerContainer}>
      <div className={classes.container}>
        <div>
          <Image
            src="https://res.cloudinary.com/dfilepe0f/image/upload/v1739285082/Frame_795_ddxvm6.svg"
            width={540}
            height={600}
            alt="About"
          />
          <Image
            src="https://res.cloudinary.com/dfilepe0f/image/upload/v1739284422/imageDecor_pb4fc6.svg"
            width={204}
            height={204}
            alt="About"
          />
        </div>
        <div>
          <div className={classes.header}>
            <p>About Us </p>
            <h4>Patient-Centered Care</h4>
          </div>

          <p>
            We are dedicated to providing exceptional dental care in a warm and
            welcoming environment. Our team of experienced, compassionate, and
            highly skilled professionals is here to ensure your dental
            experience is comfortable and stress-free.
          </p>

          <Button>Learn More</Button>
        </div>
      </div>

      <div className={classes.container}>
        <div>
          <Image
            src="https://res.cloudinary.com/dfilepe0f/image/upload/v1737384648/samples/two-ladies.jpg"
            width={540}
            height={600}
            alt="About"
          />
          <Image
            src="https://res.cloudinary.com/dfilepe0f/image/upload/v1739284422/imageDecor_pb4fc6.svg"
            width={204}
            height={204}
            alt="About"
          />
        </div>
        <div>
          <div className={classes.header}>
            <p>About Us </p>
            <h4>Patient-Centered Care</h4>
          </div>

          <p>
            We are dedicated to providing exceptional dental care in a warm and
            welcoming environment. Our team of experienced, compassionate, and
            highly skilled professionals is here to ensure your dental
            experience is comfortable and stress-free.
          </p>

          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default IndividualAndFamilyHmoAbout;
