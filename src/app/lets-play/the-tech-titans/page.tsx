import Loader from "@/components/Loader/Loader";
import TheTechTitans from "@/container/TheTechTitans/TheTechTitans";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <TheTechTitans />
    </Suspense>
  );
};

export default page;
