"use client";

import GreetingComponent from "@/components/GreetingComponent/GreetingComponent";
import classes from "./DashboardMain.module.css";
import Table from "@/components/Table/Table";
import DashboardPoliciesSummary from "../DashboardPoliciesSummary/DashboardPoliciesSummary";
import { useEffect, useMemo, useState } from "react";
import Modal from "@/components/Modal/Modal";
import { setAllModalsFalse, setModalTrue } from "@/helpers/modalHandlers";
import { modalGenericType, userPoliciesType } from "@/utilities/types";
import ClaimsForm from "../ClaimsForm/ClaimsForm";
import { useUserPolicy } from "@/hooks/usePolicies";
import { structureWords } from "@/helpers/capitalize";
import moment from "moment";

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

type DashboardMainTypes = {
  userPolicies: userPoliciesType[];
};

const DashboardMain = ({ userPolicies }: DashboardMainTypes) => {
  // States
  const [modals, setModals] = useState<modalGenericType>({
    claims: false,
  });
  const [policies, setPolicies] = useState([]);

  // Effects
  useEffect(() => {
    if (userPolicies?.length > 0) {
      const newUserPolicies = userPolicies?.map((data) => {
        return {
          policyHeld: structureWords(data?.insuranceType),
          exporationDate: moment(data?.endDate)?.format("Do MMMM, YYYY"),
          agent: "No agent",
          status: data?.status || "pending",
          isActive: false,
          id: data?._id,
        };
      });

      setPolicies(newUserPolicies as any);
    }
  }, [userPolicies]);

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
          data={policies}
          headers={headers}
          options={options}
        />
      </section>
    </>
  );
};

export default DashboardMain;
