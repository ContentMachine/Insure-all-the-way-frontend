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
          src="https://res.cloudinary.com/dfilepe0f/image/upload/v1738933352/IATW_Hero_Image_new_gwxbwj.svg"
          alt="Hero Image"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default HomeHero;
