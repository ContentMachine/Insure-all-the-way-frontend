import PolicyReminderForm from "@/container/PolicyReminderForm/PolicyReminderForm";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import React from "react";

const page = () => {
  return (
    <AuthLayout>
      <PolicyReminderForm />
    </AuthLayout>
  );
};

export default page;
