"use client";

import Header from "@/container/Header/Header";
import React from "react";
import classes from "./ApppLayout.module.css";
import Footer from "@/container/Footer/Footer";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import Modal from "@/components/Modal/Modal";
import Auth from "@/container/Auth/Auth";
import ContactUsModalBody from "@/container/ContactUsModalBody/ContactUsModalBody";

type ApppLayoutTypes = {
  children: React.ReactNode;
  className?: string;
};

const ApppLayout = ({ children, className }: ApppLayoutTypes) => {
  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  // Router
  const auth = updateSearchParams("auth", undefined, "get");
  const contactUs = updateSearchParams("contact-us", undefined, "get");

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

      {contactUs && (
        <Modal
          onClick={() => {
            updateSearchParams("contact-us", undefined, "delete");
          }}
          body={
            <ContactUsModalBody
              onClose={() => {
                updateSearchParams("contact-us", undefined, "delete");
              }}
            />
          }
        />
      )}
    </main>
  );
};

export default ApppLayout;
