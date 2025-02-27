import Button from "@/components/Button/Button";
import classes from "./FleetInsuranceHero.module.css";
import CheckCircle from "@/assets/svgIcons/CheckCircle";
import { useRouter } from "next/navigation";

const features = [
  "Policy Management: Implementation and management of fleet insurance policies, including renewals and claims.",
  "Safety Training: Education and training of fleet drivers to help reduce accidents, expenses that may occur with wear & tear, and claim rates.",
  "Compliance Support: Provide assistance to ensure compliance with relevant regulatory bodies and industry standards.",
  "Risk Management Services: Consult services on safety and loss control measures to help reduce the risk of accidents and claims, by monitoring and reporting driving habits.",
];

const FleetInsuranceHero = () => {
  // Router
  const router = useRouter();

  return (
    <section className={classes.container}>
      <h1>
        Our fleet insurance policies provide <span>Your Organisation </span>{" "}
        with the following:
      </h1>

      {features.map((data, i) => {
        return (
          <p key={i}>
            <CheckCircle />
            <span>{data}</span>
          </p>
        );
      })}

      <Button
        onClick={() => {
          router.push("#insurance-form");
        }}
      >
        Learn more
      </Button>
    </section>
  );
};

export default FleetInsuranceHero;
