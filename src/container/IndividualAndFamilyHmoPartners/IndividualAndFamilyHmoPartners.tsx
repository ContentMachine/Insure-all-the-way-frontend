import Image from "next/image";
import classes from "./IndividualAndFamilyHmoPartners.module.css";
import Button from "@/components/Button/Button";

const partners = [
  "https://res.cloudinary.com/dfilepe0f/image/upload/v1739176279/AXA-Logo_rzdpth.svg",
  "https://res.cloudinary.com/dfilepe0f/image/upload/v1739278616/reliance_zt5fco.png",
  "https://res.cloudinary.com/dfilepe0f/image/upload/v1739278616/hygeia_yt5km9.png",
  "https://res.cloudinary.com/dfilepe0f/image/upload/v1739278616/leadway_sjxko3.png",
];

const IndividualAndFamilyHmoPartners = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <p>Our Partners</p>
        <h2>Meet Our Policy Providers</h2>
      </div>

      <div className={classes.partnerSection}>
        {partners.map((data, i) => {
          return (
            <div className={classes.partner} key={i}>
              <Image width={200} height={100} src={data} alt="Partner" />
              <Button>View Plans</Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IndividualAndFamilyHmoPartners;
