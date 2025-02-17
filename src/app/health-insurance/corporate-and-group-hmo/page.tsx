import Loader from "@/components/Loader/Loader";
import CorporateHmo from "@/container/CorporateHmo/CorporateHmo";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <CorporateHmo />
    </Suspense>
  );
};

export default page;
