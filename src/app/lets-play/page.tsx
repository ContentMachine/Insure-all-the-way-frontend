import Loader from "@/components/Loader/Loader";
import LetsPlay from "@/container/LetsPlay/LetsPlay";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LetsPlay />
    </Suspense>
  );
};

export default page;
