"use client";

import Image from "next/image";
import classes from "../IndividualAndFamilyHmoSections/IndividualAndFamilyHmoSections.module.css";
import { useEffect, useRef, useState } from "react";

const sections = [
  {
    title: "Stress Free",
    caption:
      "In a few minutes, you can sign up your entire company with no hassle.",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1739348786/hassle-free-white_nse8v7.png",
  },
  {
    title: "24/7 Availability",
    caption:
      "Our 24-hour availability can always be relied upon by your employees or the hospital.",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1739348786/24-hours-white_ww0zqx.png",
  },
  {
    title: "Dedicated Account Manager",
    caption: "Having 10 or more employees will get you a Key Account Manager.",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1739348786/accountant-white_ddrtjm.png",
  },
  {
    title: "Affordable Health Insurance",
    caption: "A representative will find a plan that fits your business needs.",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1739348786/naira-white_ctuhl9.png",
  },
];

const CorporateHmoFeatures = () => {
  // States
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  // Refs
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSections((prev) => {
          const updatedSections = new Set(prev);

          entries.forEach((entry) => {
            const index = sectionRefs.current.findIndex(
              (el) => el === entry.target
            );
            if (index !== -1) {
              if (entry.isIntersecting) {
                updatedSections.add(index); // Add if visible
              } else {
                updatedSections.delete(index); // Remove if out of view
              }
            }
          });

          return Array.from(updatedSections);
        });
      },
      { threshold: 0.9 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className={classes.container}>
      {sections.map((data, i) => {
        return (
          <div
            key={i}
            ref={(el) => (sectionRefs.current[i] = el) as any}
            className={`${classes[`corporate-${i + 1}`]} ${
              classes.sectionBox
            } ${visibleSections.includes(i) ? classes.visible : undefined}`}
          >
            <Image src={data?.image} width={85} height={85} alt={data?.title} />
            <h4>{data?.title}</h4>
            <p>{data?.caption}</p>
          </div>
        );
      })}
    </section>
  );
};

export default CorporateHmoFeatures;
