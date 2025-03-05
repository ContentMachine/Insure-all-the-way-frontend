import React from "react";
import HomeHero from "../HomeHero/HomeHero";
import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import HomeStats from "../HomeStats/HomeStats";
import HomeHowWeWork from "../HomeHowWeWork/HomeHowWeWork";
import HomeParters from "../HomeParters/HomeParters";
import HomeGetAQuote from "../HomeGetAQuote/HomeGetAQuote";
import ContactUsBanner from "../ContactUsBanner/ContactUsBanner";
import HomeTestimonoals from "../HomeTestimonoals/HomeTestimonoals";
import Faqs from "../Faqs/Faqs";

const Homepage = () => {
  return (
    <ApppLayout>
      <HomeHero />
      <HomeStats />
      <HomeGetAQuote />
      <HomeHowWeWork />
      <HomeParters />
      <ContactUsBanner />
      <HomeTestimonoals />
      <Faqs />
    </ApppLayout>
  );
};

export default Homepage;
