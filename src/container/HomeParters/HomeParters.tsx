"use client";

import Image from "next/image";
import classes from "./HomeParters.module.css";
import { useEffect, useRef, useState } from "react";

const partnerLogos = [
  "https://res.cloudinary.com/dfilepe0f/image/upload/v1738773530/AXA-Logo_xrps32.svg",
  "https://res.cloudinary.com/dfilepe0f/image/upload/v1738773529/ng-nem-logo_sp3ywk.webp",
  "https://res.cloudinary.com/dfilepe0f/image/upload/v1738773532/coronation_insurance_logo_xzplbm.jpg",
  "https://res.cloudinary.com/dfilepe0f/image/upload/v1738773529/staco_kciyfj.jpg",
];

const HomeParters = () => {
  // Utils
  const extendedLogos = [...partnerLogos, ...partnerLogos];

  // Refs
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1;

    const animate = () => {
      if (carousel) {
        carousel.scrollLeft += scrollSpeed;
        scrollAmount += scrollSpeed;

        if (scrollAmount >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
      requestAnimationFrame(animate);
    };

    animate(); // Start animation

    return () => cancelAnimationFrame(animate as any);
  }, []);

  return (
    <section className={classes.container}>
      <h4>Our Partners</h4>

      <div ref={carouselRef}>
        {extendedLogos.map((data, i) => (
          <Image
            src={data}
            alt="PArtner Logo"
            key={i}
            width={100}
            height={50}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeParters;
