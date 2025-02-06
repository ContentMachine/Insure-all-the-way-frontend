import Button from "@/components/Button/Button";
import classes from "./HomeStats.module.css";
import ArrowRight from "@/assets/svgIcons/ArrowRight";
import CheckCircle from "@/assets/svgIcons/CheckCircle";

const features = [
  "Competitive Rates",
  "Quality Products and Services",
  "A1 Customer Service",
];

const HomeStats = () => {
  return (
    <section className={classes.container}>
      <div>
        <div>
          <div className={classes.info}>
            <h4>8</h4>
            <p>Strategic Partners</p>
          </div>

          <div className={classes.info}>
            <h4>21+</h4>
            <p>Added Value Services </p>
          </div>
        </div>
      </div>

      <div>
        <h2>
          Your Satisfaction Is <br /> Our Priority!
        </h2>

        <ul>
          {features?.map((data) => (
            <li>
              <span>
                <CheckCircle />
              </span>
              <span>{data}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeStats;
