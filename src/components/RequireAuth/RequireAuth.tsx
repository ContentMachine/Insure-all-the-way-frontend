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

  console.log(user, "User");

  useEffect(() => {
    if (!user) {
      router.push(routes.BASE_URL);
    }
  }, []);

  if (requestState?.isLoading) {
    return <Loader />;
  }

  return children;
};

export default RequireAuth;
