import Image from "next/image";
import classes from "./IndividualAndFamilyHmoSections.module.css";

const sections = [
  {
    title: "Plans that works for you",
    caption:
      "Depending on your requirements, we have monthly, quarterly, and yearly payment plans.",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1739276724/settings-1-150x150_fyaa96.png",
  },
  {
    title: "Payment made easy",
    caption: "Simply enter your card details and pay online.",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1739276723/credit_mn3q3l.png",
  },
  {
    title: "Easy care",
    caption: "A representative will contact you shortly.",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1739276724/heart_upja59.png",
  },
];
const IndividualAndFamilyHmoSections = () => {
  return (
    <section className={classes.container}>
      {sections.map((data, i) => {
        return (
          <div key={i}>
            <Image src={data?.image} width={85} height={85} alt={data?.title} />
            <h4>{data?.title}</h4>
            <p>{data?.caption}</p>
          </div>
        );
      })}
    </section>
  );
};

export default IndividualAndFamilyHmoSections;
