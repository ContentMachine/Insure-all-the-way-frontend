"use client";

import Loader from "@/components/Loader/Loader";
import Tracker from "@/container/Tracker/Tracker";
import React, { Suspense } from "react";

console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, "Jeyy");

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Tracker />
    </Suspense>
  );
};

export default page;
