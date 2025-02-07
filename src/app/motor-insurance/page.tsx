import Loader from "@/components/Loader/Loader";
import MotorInsurance from "@/container/MotorInsurance/MotorInsurance";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <MotorInsurance />
    </Suspense>
  );
};

export default page;
