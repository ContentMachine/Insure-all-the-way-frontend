"use client";

import Loader from "@/components/Loader/Loader";
import EnhancedThirdPartyMotorInsurance from "@/container/EnhancedThirdPartyMotorInsurance/EnhancedThirdPartyMotorInsurance";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      {" "}
      <EnhancedThirdPartyMotorInsurance />
    </Suspense>
  );
};

export default page;
