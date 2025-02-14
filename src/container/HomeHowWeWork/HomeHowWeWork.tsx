import Image from "next/image";
import classes from "./HomeHowWeWork.module.css";
import Policy from "@/assets/svgIcons/Policy";
import RequestQuote from "@/assets/svgIcons/RequestQuote";
import SpeakWithRep from "@/assets/svgIcons/SpeakWithRep";
import Shield from "@/assets/svgIcons/Shield";

const howWeWorkList = [
  {
    title: "Choose a Policy",
    description: "Pick a policy that best suits your needs.",
    icon: <Policy />,
  },
  {
    title: "Get a Quote",
    description:
      "Use the quote calculator to get an instant estimate of your premium",
    icon: <RequestQuote />,
  },
  {
    title: "Speak With a Rep",
    description:
      "Feel free to speak with a sales representative before you proceed",
    icon: <SpeakWithRep />,
  },
  {
    title: "Get Covered",
    description: "Once payment has been made, your policy will be sent to you.",
    icon: <Shield />,
  },
];

const HomeHowWeWork = () => {
  return (
    <section className={classes.container}>
      <div>
        <h2>How it Works</h2>
        <p>
          We believe that the best way to create successful marketing campaigns
          is to work closely with our clients to understand their goals and
          challenges.
        </p>

        <Image
          src="https://res.cloudinary.com/dfilepe0f/image/upload/v1739547123/how_It_Works_lzblpu.svg"
          alt="How we work"
          width={487}
          height={311}
        />
      </div>

      <div>
        {howWeWorkList?.map((data) => {
          return (
            <div key={data?.title}>
              <div>{data?.icon}</div>
              <div>
                <h4>{data?.title}</h4>
                <p>{data?.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeHowWeWork;
