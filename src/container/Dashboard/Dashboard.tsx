"use client";

import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";
import classes from "./Dashboard.module.css";
import DashboardPoliciesReview from "../DashboardPoliciesReview/DashboardPoliciesReview";
import DashboardMain from "../DashboardMain/DashboardMain";
import { useMemo } from "react";
import { useUserPolicy } from "@/hooks/usePolicies";
import Loader from "@/components/Loader/Loader";

const Dashboard = () => {
  // Requests
  const { isLoading, data: userPoliciesData } = useUserPolicy();

  // Memos
  const userPolicies = useMemo(
    () => userPoliciesData?.data?.policies,
    [userPoliciesData]
  );

  return (
    <DashboardLayout className={classes.container}>
      {isLoading ? (
        <Loader className={classes.loader} />
      ) : (
        <>
          {userPolicies?.length > 0 && (
            <DashboardPoliciesReview userPolicies={userPolicies} />
          )}
          <DashboardMain userPolicies={userPolicies} className={classes.main} />
        </>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
