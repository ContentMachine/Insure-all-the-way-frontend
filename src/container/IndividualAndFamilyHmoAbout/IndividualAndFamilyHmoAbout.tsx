import Image from "next/image";
import classes from "./IndividualAndFamilyHmoAbout.module.css";
import Button from "@/components/Button/Button";
import ArrowDown from "@/assets/svgIcons/ArrowDown";
import ArrowHeadDown from "@/assets/svgIcons/ArrowHeadDown";

const IndividualAndFamilyHmoAbout = () => {
  return (
    <section className={classes.outerContainer}>
      <div className={classes.container}>
        <div>
          <Image
            src="https://res.cloudinary.com/dfilepe0f/image/upload/v1739285082/Frame_795_ddxvm6.svg"
            width={540}
            height={600}
            alt="About"
          />
          <Image
            src="https://res.cloudinary.com/dfilepe0f/image/upload/v1739284422/imageDecor_pb4fc6.svg"
            width={204}
            height={204}
            alt="About"
          />
        </div>
        <div>
          <div className={classes.header}>
            <p>HMO Plan Recommendation</p>
            <h4>
              Want Us To Recommend A Plan
              <br /> That Best Suites Your Needs?
            </h4>
          </div>

          <p>
            Choosing the right HMO plan can be overwhelming, but we’re here to
            make it simple. Tell us about your healthcare needs, and we’ll
            recommend a plan that fits your lifestyle, budget, and medical
            requirements.
          </p>
          <p>
            Let us guide you toward an HMO plan that truly suits your needs,
            because quality healthcare should be straightforward and
            stress-free.
          </p>

          <Button>
            <span>Recommend Plan</span>
            <ArrowHeadDown />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndividualAndFamilyHmoAbout;
