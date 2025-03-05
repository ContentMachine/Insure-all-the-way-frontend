"use client";

import Loader from "@/components/Loader/Loader";
import ThirdPartyMotorInsurance from "@/container/ThirdPartyMotorInsurance/ThirdPartyMotorInsurance";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ThirdPartyMotorInsurance />
    </Suspense>
  );
};

export default page;
