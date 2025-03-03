import Loader from "@/components/Loader/Loader";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div></div>
    </Suspense>
  );
};

export default page;
