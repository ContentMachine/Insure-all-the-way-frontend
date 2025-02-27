import Loader from "@/components/Loader/Loader";
import Building from "@/container/Building/Building";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Building />;
    </Suspense>
  );
};

export default page;
