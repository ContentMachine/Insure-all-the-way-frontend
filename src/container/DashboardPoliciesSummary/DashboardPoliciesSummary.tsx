"use client";

import { useUserPoliciesStats } from "@/hooks/usePolicies";
import classes from "./DashboardPoliciesSummary.module.css";
import PoliciesSummaryCard from "@/components/PoliciesSummaryCard/PoliciesSummaryCard";
import Loader from "@/components/Loader/Loader";
import { useMemo } from "react";

const DashboardPoliciesSummary = () => {
  // Requests
  const { isLoading, data } = useUserPoliciesStats();

  // Memos
  const stats = useMemo(() => data?.data, [data]);

  console.log(stats, "Hmm");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={classes.container}>
      <PoliciesSummaryCard
        title="Policies Held"
        amount={stats?.policiesHeld}
        notAmount
      />

      <PoliciesSummaryCard
        title="Policies Overdue"
        amount={stats?.policiesOverdue}
        notAmount
      />

      <PoliciesSummaryCard
        title="Pending Policies"
        amount={stats?.pendingPolicies}
        notAmount
      />
    </section>
  );
};

export default DashboardPoliciesSummary;
