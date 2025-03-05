"use client";

import Loader from "@/components/Loader/Loader";
import Tracker from "@/container/Tracker/Tracker";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Tracker />
    </Suspense>
  );
};

export default page;
