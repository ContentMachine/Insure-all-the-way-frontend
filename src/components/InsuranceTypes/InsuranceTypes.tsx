"use client";

import { insuranceTypes } from "@/utilities/types";
import Image from "next/image";
import classes from "./InsuranceTypes.module.css";
import Button from "../Button/Button";
import { usePathname, useRouter } from "next/navigation";

type InsuranceTypesTypes = {
  data: insuranceTypes[];
};

const InsuranceTypes = ({ data }: InsuranceTypesTypes) => {
  // Router
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className={classes.container}>
      {data?.map((item) => {
        return (
          <div key={item.title} className={classes.item}>
            <div>
              <h4 dangerouslySetInnerHTML={{ __html: item.title }}></h4>
              {item.descriptions?.map((data) => (
                <p key={data}>{data}</p>
              ))}
              <ul>
                {item.list?.map((data) => (
                  <li key={data}>{data}</li>
                ))}
              </ul>

              <Button
                onClick={() => {
                  router.push(`${pathname}/${item?.route}`);
                }}
              >
                Learn more
              </Button>
            </div>

            <div>
              <Image
                src={item.image}
                alt={item.title}
                width={612}
                height={408}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default InsuranceTypes;
