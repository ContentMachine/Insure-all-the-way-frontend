import Loader from "@/components/Loader/Loader";
import PropertyInsurance from "@/container/PropertyInsurance/PropertyInsurance";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <PropertyInsurance />
    </Suspense>
  );
};

export default page;
