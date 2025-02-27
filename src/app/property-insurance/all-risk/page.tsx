import Loader from "@/components/Loader/Loader";
import AllRisk from "@/container/AllRisk/AllRisk";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AllRisk />
    </Suspense>
  );
};

export default page;
