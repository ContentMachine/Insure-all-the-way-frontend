import HandShake from "@/assets/svgIcons/HandShake";
import classes from "./HomeStats.module.css";
import CheckCircle from "@/assets/svgIcons/CheckCircle";
import Reward from "@/assets/svgIcons/Reward";

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
            <div>
              <h4>8</h4>
              <p>Strategic Partners</p>
            </div>
            <div>
              <HandShake />
            </div>
          </div>

          <div className={classes.info}>
            <div>
              <h4>21+</h4>
              <p>Added Value Services </p>
            </div>
            <div>
              <Reward />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>
          Your Satisfaction <br /> Is Our Priority!
        </h2>

        <ul>
          {features?.map((data, i) => (
            <li key={i}>
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
