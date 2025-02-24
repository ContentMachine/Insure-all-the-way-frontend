"use client";

import { capitalize } from "@/helpers/capitalize";
import classes from "./Table.module.css";
import ArrowDown from "@/assets/svgIcons/ArrowDown";
import {
  modalGenericType,
  tableOptionsType,
  userPoliciesType,
} from "@/utilities/types";
import { useEffect, useRef, useState } from "react";
import { activeToggler } from "@/helpers/activeHandlers";
import { setAllModalsFalse, setModalTrue } from "@/helpers/modalHandlers";
import Modal from "../Modal/Modal";
import PolicyInformationModalBody from "@/container/PolicyInformationModalBody/PolicyInformationModalBody";

type TableType = {
  headers: string[];
  data: userPoliciesType[];
  header: string;
  options?: tableOptionsType[];
};

const Table = ({ header, data, headers, options }: TableType) => {
  // States
  const [dataState, setDataState] = useState<any>([]);
  const [modals, setModals] = useState<modalGenericType>({
    info: false,
  });
  const [activeId, setActiveId] = useState<string | null>(null);

  //   Ref
  const optionsDiv = useRef<HTMLDivElement | null>(null);

  //   Effects
  useEffect(() => {
    if (data?.length > 0) {
      const newData = data?.map((data) => {
        return { ...data, isActive: false };
      });

      setDataState(newData as any);
    }
  }, [data]);

  useEffect(() => {
    if (typeof window !== "undefined" && data?.length > 0) {
      const optionsRemoveHandler = (e: any) => {
        if (optionsDiv?.current && !optionsDiv?.current?.contains(e.target)) {
          setDataState((prevState: any) => {
            return prevState.map((data: any) => {
              return { ...data, isActive: false };
            });
          });
        }
      };

      typeof document !== "undefined" &&
        document.addEventListener("mousedown", optionsRemoveHandler);

      return () => {
        typeof document !== "undefined" &&
          document.removeEventListener("mousedown", optionsRemoveHandler);
      };
    }
  }, [data?.length]);

  return (
    <>
      {modals.info && (
        <Modal
          onClick={() => setAllModalsFalse(setModals)}
          body={
            <PolicyInformationModalBody
              onClose={() => setAllModalsFalse(setModals)}
              id={activeId as string}
            />
          }
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
          {dataState?.map((item: any, rowIndex: number) => {
            return (
              <div
                className={classes.tableBodyContainer}
                key={Math.random()}
                onClick={() => {
                  setActiveId(item?.id);
                  setModalTrue(setModals, "info");
                }}
              >
                {headers.map((_, colIndex) => {
                  if (typeof Object.values(item)[colIndex] === "boolean") {
                    return (
                      <span className={`${classes?.tableBody}`}>
                        <span
                          className={classes.button}
                          onClick={(e) => {
                            e.stopPropagation();
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Table;
