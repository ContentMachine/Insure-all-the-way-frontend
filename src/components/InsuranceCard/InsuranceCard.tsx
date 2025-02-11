"use client";

import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import classes from "./InsuranceCard.module.css";

type InsuranceCardTypes = {
  backgroundImage: string;
  title: string;
  route: string;
};

const InsuranceCard = ({
  backgroundImage,
  title,
  route,
}: InsuranceCardTypes) => {
  // Router
  const router = useRouter();

  return (
    <div className={classes.container}>
      <div
        className={classes.insuranceCard}
        style={{
          backgroundImage: `url(${
            backgroundImage ||
            "https://res.cloudinary.com/dfilepe0f/image/upload/v1737384645/samples/ecommerce/car-interior-design.jpg"
          })`,
        }}
      >
        <div></div>
        <Button
          type="secondary"
          onClick={() => {
            router.push(route);
          }}
        >
          View Details
        </Button>
      </div>

      <p>{title || "No title"}</p>
    </div>
  );
};

export default InsuranceCard;
