import Loader from "@/components/Loader/Loader";
import FleetInsurance from "@/container/FleetInsurance/FleetInsurance";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <FleetInsurance />
    </Suspense>
  );
};

export default page;
