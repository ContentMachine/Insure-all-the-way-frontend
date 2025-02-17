"use client"; // Required for Next.js to ensure this runs on the client side

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import classes from "./IndividualAndFamilyHmoSections.module.css";

interface Section {
  title: string;
  caption: string;
  image: string;
}

const sections: Section[] = [
  {
    title: "Plans that work for you",
    caption:
      "Depending on your requirements, we have monthly, quarterly, and yearly payment plans.",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1739276724/settings-1-150x150_fyaa96.png",
  },
  {
    title: "Payment made easy",
    caption: "Simply enter your card details and pay online.",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1739276723/credit_mn3q3l.png",
  },
  {
    title: "Easy care",
    caption: "A representative will contact you shortly.",
    image:
      "https://res.cloudinary.com/dfilepe0f/image/upload/v1739276724/heart_upja59.png",
  },
];

const IndividualAndFamilyHmoSections: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.9 } // Adjust visibility threshold
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
      {sections.map((data, i) => (
        <div
          key={i}
          ref={(el) => (sectionRefs.current[i] = el) as any}
          className={`${classes.sectionBox} ${
            visibleSections.includes(i) ? classes.visible : ""
          }`}
        >
          <Image src={data.image} width={85} height={85} alt={data.title} />
          <h4>{data.title}</h4>
          <p>{data.caption}</p>
        </div>
      ))}
    </section>
  );
};

export default IndividualAndFamilyHmoSections;
