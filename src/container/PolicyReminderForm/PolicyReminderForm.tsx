import Input from "@/components/Input/Input";
import Logo from "@/components/Logo/Logo";
import Image from "next/image";
import React from "react";
import classes from "./PolicyReminderForm.module.css";
import Button from "@/components/Button/Button";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";

const PolicyReminderForm = () => {
  return (
    <AuthLayout>
      <div className={classes.container}>
        <Logo />
        <h4>Policy Reminder</h4>
        <p>
          We will remind you when your insurance policy and vahiccle papers are
          due to expire. Just fill out and submit the form below
        </p>
        <Input label="First name" />
        <Input label="Last name" />
        <Input label="Phone number" type="phone" />
        <Input label="Plate number" type="number" />
        <div className={classes.consent}>
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            By creating an account, I agree to our Terms of use and Privacy
            Policy
          </label>
        </div>
        <Button>Submit</Button>
      </div>
    </AuthLayout>
  );
};

export default PolicyReminderForm;
