import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import React from "react";
import PolicyReminderForm from "../PolicyReminderForm/PolicyReminderForm";
import SignIn from "../SignIn/SignIn";

const Auth = () => {
  // Hook
  const { updateSearchParams } = useUpdateSearchParams();

  // Router
  const auth = updateSearchParams("auth", undefined, "get");

  let container: React.ReactNode | null = null;

  if (auth === "policy") {
    container = <PolicyReminderForm />;
  } else {
    container = <SignIn />;
  }

  return container;
};

export default Auth;
