import React from "react";
import classes from "./MotorInsurancePlans.module.css";
import RateCard from "@/components/RateCard/RateCard";
import { policySubTypePlansType, policySubtypeType } from "@/utilities/types";
import { routes } from "@/utilities/routes";
import Loader from "@/components/Loader/Loader";

type MotorInsurancePlansType = {
  plans: policySubtypeType[];
  loading: boolean;
};

const colors = ["#a7c7e7", "#ababab", "#edd014", "#909090"];

const MotorInsurancePlans = ({ plans, loading }: MotorInsurancePlansType) => {
  return (
    <section className={classes.container} id="plans">
      <h4>
        Here's an overview of our <span>Motor Insurance plans</span>
      </h4>

      {loading ? (
        <Loader />
      ) : (
        <div className={classes.plansContainer}>
          {plans?.map((data, i) => {
            return (
              <RateCard
                key={data?.id}
                theme={colors[i] || "#000"}
                title={data?.name}
                description={data?.description}
                features={data?.features}
                price={data?.price}
                route={`${routes?.MOTOR_INSURANCE}/${data?.id}`}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default MotorInsurancePlans;
