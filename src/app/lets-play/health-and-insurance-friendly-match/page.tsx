import Loader from "@/components/Loader/Loader";
import HealthAndInsuranceFriendlyMatch from "@/container/HealthAndInsuranceFriendlyMatch/HealthAndInsuranceFriendlyMatch";
import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <HealthAndInsuranceFriendlyMatch />
    </Suspense>
  );
};

export default page;
