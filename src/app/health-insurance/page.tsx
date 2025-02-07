import Loader from "@/components/Loader/Loader";
import HealthInsurance from "@/container/HealthInsurance/HealthInsurance";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <HealthInsurance />
    </Suspense>
  );
};

export default page;
