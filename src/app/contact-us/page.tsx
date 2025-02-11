import Loader from "@/components/Loader/Loader";
import ContactUs from "@/container/ContactUs/ContactUs";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ContactUs />
    </Suspense>
  );
};

export default page;
