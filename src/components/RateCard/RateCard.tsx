"use client";

import Check from "@/assets/svgIcons/Check";
import Button from "../Button/Button";
import classes from "./RateCard.module.css";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/helpers/formatAmount";

type RateCardTypes = {
  title: string;
  description: string;
  theme?: string;
  period?: string;
  features: string[];
  price: number | string;
  route?: string;
  onClick?: () => void;
};

const RateCard = ({
  theme,
  title,
  description,
  period,
  features,
  price,
  route,
  onClick,
}: RateCardTypes) => {
  // Router
  const router = useRouter();

  return (
    <div className={classes.container} style={{ border: `2px solid ${theme}` }}>
      <h4>{title}</h4>
      <p>{description}</p>
      <h3 style={{ color: theme }}>
        {price
          ? typeof price === "number"
            ? `₦${formatCurrency(price)}`
            : price
          : "Contact us"}
      </h3>
      <span
        style={price ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        {period || "per annum"}
      </span>
      <Button
        type="bordered"
        onClick={() => {
          if (route) {
            router.push(route);
          } else {
            router.push("#insurance-form");
          }
          if (onClick) {
            onClick();
          }
        }}
        style={{ background: theme, border: theme }}
      >
        Choose this plan
      </Button>
      <ul>
        {features?.map((data) => (
          <li key={data}>
            <Check />
            <span>{data}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RateCard;
