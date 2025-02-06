"use client";

import Header from "@/container/Header/Header";
import React from "react";
import classes from "./ApppLayout.module.css";
import Footer from "@/container/Footer/Footer";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import Modal from "@/components/Modal/Modal";
import Auth from "@/container/Auth/Auth";

type ApppLayoutTypes = {
  children: React.ReactNode;
  className?: string;
};

const ApppLayout = ({ children, className }: ApppLayoutTypes) => {
  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  // Router
  const auth = updateSearchParams("auth", undefined, "get");

  return (
    <main className={classes.container}>
      <Header />
      <section className={className}>{children}</section>
      <Footer />
      {auth && (
        <Modal
          onClick={() => {
            updateSearchParams("auth", undefined, "delete");
          }}
          body={<Auth />}
        />
      )}
    </main>
  );
};

export default ApppLayout;
