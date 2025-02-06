import Image from "next/image";
import classes from "./HomeHero.module.css";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

const HomeHero = () => {
  return (
    <section className={classes.container}>
      <div>
        <h1>
          <span>Insurance</span> With A Difference
        </h1>
        <p>
          Insure All The Way provides you with quality insurance products and
          services
        </p>

        <form className={classes.textSection}>
          <Input placeholder="Enter your Email" />
          <Button>Let's Talk</Button>
        </form>
      </div>
      <div>
        <Image
          src="https://res.cloudinary.com/dfilepe0f/image/upload/v1738838374/IATW_Hero_Image_qbhyc0.svg"
          alt="Hero Image"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default HomeHero;
