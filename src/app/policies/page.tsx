import Loader from "@/components/Loader/Loader";
import Policies from "@/container/Policies/Policies";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Policies />
    </Suspense>
  );
};

export default page;
