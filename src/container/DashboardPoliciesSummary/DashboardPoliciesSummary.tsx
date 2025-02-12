"use client";

import classes from "./DashboardPoliciesSummary.module.css";
import PoliciesSummaryCard from "@/components/PoliciesSummaryCard/PoliciesSummaryCard";

const DashboardPoliciesSummary = () => {
  return (
    <section className={classes.container}>
      <PoliciesSummaryCard
        title="Policies Held"
        amount={3}
        cta={{
          text: "See details",
          action: () => console.log("Clicked"),
        }}
        notAmount
      />

      <PoliciesSummaryCard
        title="Policies Overdue"
        amount={2}
        cta={{
          text: "See details",
          action: () => console.log("Clicked"),
        }}
        notAmount
      />

      <PoliciesSummaryCard
        title="Pending Policies"
        amount={1}
        cta={{
          text: "See details",
          action: () => console.log("Clicked"),
        }}
        notAmount
      />
    </section>
  );
};

export default DashboardPoliciesSummary;
