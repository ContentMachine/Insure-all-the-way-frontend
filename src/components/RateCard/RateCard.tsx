import Check from "@/assets/svgIcons/Check";
import Button from "../Button/Button";
import classes from "./RateCard.module.css";

const features = [
  "3gb free",
  "Free car wash",
  "Best insurance",
  "Best for personal vehicles.",
];

const RateCard = () => {
  return (
    <div className={classes.container}>
      <h4>Starter</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam
        adipisci temporibus
      </p>
      <h3>$200.00</h3>
      <span>per annum</span>
      <Button type="bordered">Choose this plan</Button>
      <ul>
        {features.map((data) => (
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
