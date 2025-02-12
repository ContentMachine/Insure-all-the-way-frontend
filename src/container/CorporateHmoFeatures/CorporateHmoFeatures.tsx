import Image from "next/image";
import classes from "../IndividualAndFamilyHmoSections/IndividualAndFamilyHmoSections.module.css";

const sections = [
  {
    title: "Stress Free",
    caption:
      "In a few minutes, you can sign up your entire company with no hassle.",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1739348786/hassle-free-white_nse8v7.png",
  },
  {
    title: "24/7 Availability",
    caption:
      "Our 24-hour availability can always be relied upon by your employees or the hospital.",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1739348786/24-hours-white_ww0zqx.png",
  },
  {
    title: "Dedicated Account Manager",
    caption: "Having 10 or more employees will get you a Key Account Manager.",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1739348786/accountant-white_ddrtjm.png",
  },
  {
    title: "Affordable Health Insurance",
    caption: "A representative will find a plan that fits your business needs.",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1739348786/naira-white_ctuhl9.png",
  },
];

const CorporateHmoFeatures = () => {
  return (
    <section className={classes.container}>
      {sections.map((data, i) => {
        return (
          <div key={i} className={classes[`corporate-${i + 1}`]}>
            <Image src={data?.image} width={85} height={85} alt={data?.title} />
            <h4>{data?.title}</h4>
            <p>{data?.caption}</p>
          </div>
        );
      })}
    </section>
  );
};

export default CorporateHmoFeatures;
