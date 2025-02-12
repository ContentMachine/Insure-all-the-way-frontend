import { capitalize } from "@/helpers/capitalize";
import classes from "./GreetingComponent.module.css";

const GreetingComponent = () => {
  //   Utils

  const getCurrentHours = () => {
    const date = new Date();
    const hours = date.getHours();

    if (hours > 0 && hours < 12) {
      return <p>Good morning ⛅️</p>;
    } else if (hours >= 12 && hours < 17) {
      return <p>Good afternoon 🌤️</p>;
    } else if (hours >= 17) {
      return <p>Good evening 🌙</p>;
    }
  };

  return (
    <div>
      <section className={classes.container}>
        {getCurrentHours()}
        <h4 className="font-main text-4xl font-normal text-black">
          {capitalize("Eniola")}
        </h4>
      </section>
    </div>
  );
};

export default GreetingComponent;
