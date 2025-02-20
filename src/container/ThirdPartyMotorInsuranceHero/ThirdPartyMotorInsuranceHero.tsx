import RateCard from "@/components/RateCard/RateCard";
import classes from "./ThirdPartyMotorInsuranceHero.module.css";
import {
  policySubtypeType,
  thirdPartyInsuranceFormTypes,
} from "@/utilities/types";
import Loader from "@/components/Loader/Loader";
import { Dispatch, SetStateAction } from "react";

type ThirdPartyMotorInsuranceHeroType = {
  data: policySubtypeType;
  loading: boolean;
  setData: Dispatch<SetStateAction<thirdPartyInsuranceFormTypes>>;
};

const ThirdPartyMotorInsuranceHero = ({
  data,
  loading,
  setData,
}: ThirdPartyMotorInsuranceHeroType) => {
  return (
    <section className={classes.container}>
      <h1>
        You are 5 minutes away from getting your{" "}
        <span> Third Party Motor Insurance!</span>
      </h1>
      <p>
        This insurance policy protects you from any damage or liability you
        cause to a third party, including accidental death or bodily injury.
      </p>

      <div className={classes.rateSection}>
        {loading ? (
          <Loader />
        ) : (
          data?.plans?.map((data) => {
            return (
              <RateCard
                title={data?.name}
                price={data?.price}
                features={data?.features}
                description={data?.description}
                onClick={() =>
                  setData((prevState) => {
                    return { ...prevState, product: data?.name };
                  })
                }
              />
            );
          })
        )}
      </div>

      <div></div>
      <div></div>
    </section>
  );
};

export default ThirdPartyMotorInsuranceHero;
