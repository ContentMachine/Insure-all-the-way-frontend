import SectionsHero from "@/components/SectionsHero/SectionsHero";
import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import React from "react";
import LetsPlayVideoContainer from "../LetsPlayVideoContainer/LetsPlayVideoContainer";
import classes from "../TheTechTitans/TheTechTitans.module.css";

const HealthAndInsuranceFriendlyMatch = () => {
  return (
    <ApppLayout>
      <SectionsHero
        title="Health and Insurance Friendly Match"
        bannerImage="https://res.cloudinary.com/dfilepe0f/image/upload/v1741161315/healthAndInsuranceBanner_mscbpc.jpg"
      />
      <div className={classes.content}>
        <div>
          <h4>WHY WE ARE HERE</h4>
          <p>
            With the help of SOMO CAPITAL, an early-stage venture studio that
            supports and mentors founders all over the African continent, we
            present to you the Tech Titans Tournament. An activity day and
            football tournament designed to bring together the best and
            brightest in the Nigerian tech industry. In an industry that
            requires many workers to be glued to their laptops for hours on end,
            the day promotes the importance of living an active lifestyle.
          </p>
        </div>
        <LetsPlayVideoContainer
          title="The Tech Titans Tournament"
          url="https://www.youtube.com/embed/xIwCAMjjE64?si=qr7Knse9CrHB0em-"
        />
      </div>
    </ApppLayout>
  );
};

export default HealthAndInsuranceFriendlyMatch;
