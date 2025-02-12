import Loader from "@/components/Loader/Loader";
import Dashboard from "@/container/Dashboard/Dashboard";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Dashboard />
    </Suspense>
  );
};

export default page;
