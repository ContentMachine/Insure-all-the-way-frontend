import Input from "@/components/Input/Input";
import classes from "./Faqs.module.css";
import Button from "@/components/Button/Button";
import FaqComponent from "@/components/FaqComponent/FaqComponent";
import { faqs } from "@/utilities/faqs";
import ArrowForward from "@/assets/svgIcons/ArrowForward";
import ArrowRight from "@/assets/svgIcons/ArrowRight";

const Faqs = () => {
  return (
    <section className={classes.container}>
      <div>
        {faqs?.slice(0, 4)?.map((data) => {
          return (
            <FaqComponent
              question={data?.question}
              answer={data?.answer}
              key={data?.question}
            />
          );
        })}
      </div>
      <div>
        <h4>How we can help you?</h4>
        <p>
          Follow our newsletter. We will regulary update our latest project and
          availability.
        </p>
        <div>
          <Input placeholder="Enter your Email" />
          <Button>Let's Talk</Button>
        </div>

        <Button type="null">
          <span>More FAQs</span>
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
};

export default Faqs;
