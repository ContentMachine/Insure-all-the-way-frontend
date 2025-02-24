import Loader from "@/components/Loader/Loader";
import RequireAuth from "@/components/RequireAuth/RequireAuth";
import Dashboard from "@/container/Dashboard/Dashboard";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      {/* <RequireAuth> */}
      <Dashboard />
      {/* </RequireAuth> */}
    </Suspense>
  );
};

export default page;
