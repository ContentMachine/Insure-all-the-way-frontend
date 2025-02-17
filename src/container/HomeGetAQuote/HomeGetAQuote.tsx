import { headerRoutes } from "@/utilities/routes";
import classes from "./HomeGetAQuote.module.css";
import InsuranceCard from "@/components/InsuranceCard/InsuranceCard";

const insuranceProducts = headerRoutes[0].children;
const colors = ["#edd014", "rgb(212, 47, 47)", "#717171"];

const HomeGetAQuote = () => {
  return (
    <section className={classes.container}>
      <h4>
        <hr />
        Get a Quote
        <hr />
      </h4>
      <p>Click on one of the products below to get an instant quote. </p>
      <p>If it's a unique circumstance, give us a call</p>

      <div>
        {insuranceProducts?.map((data, i) => (
          <InsuranceCard
            title={data?.title}
            backgroundImage={data?.image}
            key={i}
            route={data?.route}
            color={colors[i]}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeGetAQuote;
