import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";
import React from "react";
import DashboardMain from "../DashboardMain/DashboardMain";
import SectionsHeader from "@/components/SectionsHeader/SectionsHeader";
import DashboardPoliciesSummary from "../DashboardPoliciesSummary/DashboardPoliciesSummary";
import classes from "./Policies.module.css";
import Table from "@/components/Table/Table";

const headers = [
  "Policy Held",
  "Expiration Date",
  "Agent",
  "Status",
  "Actions",
];

const data = [
  {
    policyHeld: "Third Party Motor Insurance",
    expirationDate: "18th June, 2025",
    agent: "Eniola Martins",
    status: "Active",
  },
  {
    policyHeld: "Health Insurance",
    expirationDate: "18th June, 2025",
    agent: "Eniola Martins",
    status: "Expired",
  },
  {
    policyHeld: "Assurance",
    expirationDate: "18th June, 2025",
    agent: "Eniola Martins",
    status: "Active",
  },
  {
    policyHeld: "Davido's Assurance",
    expirationDate: "18th June, 2025",
    agent: "Eniola Martins",
    status: "Active",
  },
];

// Utils
const options = [
  {
    text: "Claim",
    action: () => {},
  },
  {
    text: "Renew Policy",
    action: () => {},
  },
  {
    text: "Download Policy",
    action: () => {},
  },
  {
    text: "Renew Vehicle Papers",
    action: () => {},
  },
];

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
