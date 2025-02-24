"use client";

import { AuthContext } from "@/context/AuthContext";
import { routes } from "@/utilities/routes";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import Loader from "../Loader/Loader";

type RequireAuthTypes = {
  children: React.ReactNode;
};

const RequireAuth = ({ children }: RequireAuthTypes) => {
  const router = useRouter();

  // COntext
  const { requestState, user } = useContext(AuthContext);

  useEffect(() => {
    if (!requestState?.isLoading && !user && !requestState?.data) {
      router.push(routes.BASE_URL);
    }
  }, [user, requestState?.isLoading, requestState?.data]);

  if (requestState?.isLoading || !requestState?.data) {
    return <Loader />;
  }

  console.log(user, "User10000");

  return children;
};

export default RequireAuth;
