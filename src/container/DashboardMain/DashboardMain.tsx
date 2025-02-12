"use client";

import GreetingComponent from "@/components/GreetingComponent/GreetingComponent";
import classes from "./DashboardMain.module.css";
import Table from "@/components/Table/Table";
import DashboardPoliciesSummary from "../DashboardPoliciesSummary/DashboardPoliciesSummary";

export const headers = [
  "Policy Held",
  "Expiration Date",
  "Agent",
  "Status",
  "Actions",
];

export const data = [
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

export const options = [
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

const DashboardMain = () => {
  return (
    <section className={classes.container}>
      <GreetingComponent />
      <DashboardPoliciesSummary />
      <Table
        header="Policies"
        data={data}
        headers={headers}
        options={options}
      />
    </section>
  );
};

export default DashboardMain;
