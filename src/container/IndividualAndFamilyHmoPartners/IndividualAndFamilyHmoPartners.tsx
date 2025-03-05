import Image from "next/image";
import classes from "./IndividualAndFamilyHmoPartners.module.css";
import Button from "@/components/Button/Button";

const partners = [
  "https://res.cloudinary.com/dfilepe0f/image/upload/v1739176279/AXA-Logo_rzdpth.svg",
  "https://res.cloudinary.com/dfilepe0f/image/upload/v1739547763/Reliance_HMO_tluw93.svg",
  "https://res.cloudinary.com/dfilepe0f/image/upload/v1739547763/Hygeia_HMO_hwgk0t.svg",
  "https://res.cloudinary.com/dfilepe0f/image/upload/v1739547765/Leadway_kkq3xh.svg",
];

const IndividualAndFamilyHmoPartners = () => {
  return (
    <section className={classes.container} id="partners">
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
