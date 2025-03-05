"use client";

import Loader from "@/components/Loader/Loader";
import ComprehensiveMotorInsurance from "@/container/ComprehensiveMotorInsurance/ComprehensiveMotorInsurance";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ComprehensiveMotorInsurance />
    </Suspense>
  );
};

export default page;
