import Loader from "@/components/Loader/Loader";
import IndividualAndFamilyHmo from "@/container/IndividualAndFamilyHmo/IndividualAndFamilyHmo";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <IndividualAndFamilyHmo />
    </Suspense>
  );
};

export default page;
