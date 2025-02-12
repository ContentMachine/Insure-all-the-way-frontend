"use client";

import { capitalize } from "@/helpers/capitalize";
import classes from "./Table.module.css";
import ArrowDown from "@/assets/svgIcons/ArrowDown";
import { modalGenericType, tableOptionsType } from "@/utilities/types";
import { useEffect, useRef, useState } from "react";
import { activeToggler, activeTogglerRestAll } from "@/helpers/activeHandlers";
import { setAllModalsFalse, setModalTrue } from "@/helpers/modalHandlers";
import Modal from "../Modal/Modal";
import PolicyInformationModalBody from "@/container/PolicyInformationModalBody/PolicyInformationModalBody";

type TableType = {
  headers: string[];
  data: any[];
  header: string;
  options?: tableOptionsType[];
};

const Table = ({ header, data, headers, options }: TableType) => {
  // States
  const [dataState, setDataState] = useState(
    data?.map((data) => {
      return { ...data, isActive: false };
    })
  );
  const [modals, setModals] = useState<modalGenericType>({
    info: false,
  });

  //   Ref
  const optionsDiv = useRef<HTMLDivElement | null>(null);

  //   Effects
  useEffect(() => {
    if (typeof window !== "undefined") {
      const optionsRemoveHandler = (e: any) => {
        if (optionsDiv?.current && !optionsDiv?.current?.contains(e.target)) {
          const allFalseOptions = dataState?.map((data) => {
            return { ...data, isActive: false };
          });
          setDataState(allFalseOptions);
        }
      };

      typeof document !== "undefined" &&
        document.addEventListener("mousedown", optionsRemoveHandler);

      return () => {
        typeof document !== "undefined" &&
          document.removeEventListener("mousedown", optionsRemoveHandler);
      };
    }
  }, []);

  return (
    <>
      {modals.info && (
        <Modal
          onClick={() => setAllModalsFalse(setModals)}
          body={<PolicyInformationModalBody />}
        />
      )}
      <div>
        <div className={classes.header}>{header}</div>
        <div className={classes.tableHeaderContainer}>
          {headers.map((header, index) => {
            return (
              <span key={index} className={`${classes?.tableHeader}`}>
                {header.toUpperCase()}
              </span>
            );
          })}
        </div>
        <div>
          {dataState?.map((item, rowIndex) => (
            <div
              className={classes.tableBodyContainer}
              key={rowIndex}
              onClick={() => setModalTrue(setModals, "info")}
            >
              {headers.map((_, colIndex) => {
                if (typeof Object.values(item)[colIndex] === "boolean") {
                  return (
                    <span className={`${classes?.tableBody}`}>
                      <span
                        className={classes.button}
                        onClick={() => {
                          activeToggler(rowIndex, dataState, setDataState);
                        }}
                      >
                        <span>Options</span>
                        <ArrowDown dimensions="16px" />
                        {item?.isActive && (
                          <div className={classes.options} ref={optionsDiv}>
                            {options?.map((option) => {
                              return (
                                <span onClick={option.action}>
                                  {option.text}
                                </span>
                              );
                            })}
                          </div>
                        )}
                      </span>
                    </span>
                  );
                }
                return (
                  <span key={colIndex} className={classes?.tableBody}>
                    <span>
                      {capitalize(
                        String(
                          Object.values(item)[colIndex] as string
                        ) as string
                      )}
                    </span>
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Table;
