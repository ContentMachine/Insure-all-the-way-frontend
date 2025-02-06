import { headerRoutes } from "@/utilities/routes";
import classes from "./HomeGetAQuote.module.css";
import InsuranceCard from "@/components/InsuranceCard/InsuranceCard";

const insuranceProducts = headerRoutes[0].children;

const HomeGetAQuote = () => {
  return (
    <section className={classes.container}>
      <h4>Get a Quote</h4>
      <p>Click on one of the prducts below to get an instant quote. </p>
      <p>If it's a unique circumstance, give us a call</p>

      <div>
        {insuranceProducts?.map((data) => (
          <InsuranceCard title={data?.title} backgroundImage={data?.image} />
        ))}
      </div>
    </section>
  );
};

export default HomeGetAQuote;
