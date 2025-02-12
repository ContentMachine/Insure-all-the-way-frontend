import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";
import React from "react";
import DashboardMain, {
  data,
  headers,
  options,
} from "../DashboardMain/DashboardMain";
import SectionsHeader from "@/components/SectionsHeader/SectionsHeader";
import DashboardPoliciesSummary from "../DashboardPoliciesSummary/DashboardPoliciesSummary";
import classes from "./Policies.module.css";
import Table from "@/components/Table/Table";

const Policies = () => {
  return (
    <DashboardLayout className={classes.container}>
      <SectionsHeader
        header="Policies"
        caption="Catch your policies at one glance"
      />
      <DashboardPoliciesSummary />
      <Table
        data={data}
        headers={headers}
        header="Policies"
        options={options}
      />
    </DashboardLayout>
  );
};

export default Policies;
