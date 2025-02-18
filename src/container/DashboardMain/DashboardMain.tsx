"use client";

import GreetingComponent from "@/components/GreetingComponent/GreetingComponent";
import classes from "./DashboardMain.module.css";
import Table from "@/components/Table/Table";
import DashboardPoliciesSummary from "../DashboardPoliciesSummary/DashboardPoliciesSummary";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import { setAllModalsFalse, setModalTrue } from "@/helpers/modalHandlers";
import { modalGenericType } from "@/utilities/types";
import ClaimsForm from "../ClaimsForm/ClaimsForm";

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
];

const DashboardMain = () => {
  // States
  const [modals, setModals] = useState<modalGenericType>({
    claims: false,
  });

  // Utils
  const options = [
    {
      text: "Claim",
      action: () => {
        setModalTrue(setModals, "claims");
      },
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

  return (
    <>
      {modals.claims && (
        <Modal
          onClick={() => setAllModalsFalse(setModals)}
          body={<ClaimsForm onClose={() => setAllModalsFalse(setModals)} />}
        />
      )}
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
    </>
  );
};

export default DashboardMain;
