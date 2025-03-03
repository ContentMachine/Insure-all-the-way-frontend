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
import moment from "moment";
import { useRouter } from "next/navigation";
import { routes } from "@/utilities/routes";
import ClaimsForm from "@/container/ClaimsForm/ClaimsForm";

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
    claim: false,
  });
  const [activeId, setActiveId] = useState<string | null>(null);

  //   Ref
  const optionsDiv = useRef<HTMLDivElement | null>(null);

  // Utils
  const today = moment();

  // Router
  const router = useRouter();

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
              onClaim={() => {
                setAllModalsFalse(setModals);
                setModalTrue(setModals, "claims");
              }}
            />
          }
        />
      )}

      {modals.claims && (
        <Modal
          onClick={() => setAllModalsFalse(setModals)}
          body={
            <ClaimsForm
              onClose={() => setAllModalsFalse(setModals)}
              selectedPolicyId={activeId}
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
        {data?.length > 0 ? (
          <>
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
                        const endDate = String(
                          Object.values(item)[1]
                        ) as string;

                        return (
                          <span className={`${classes?.tableBody}`}>
                            <span
                              className={classes.button}
                              onClick={(e) => {
                                e.stopPropagation();
                                activeToggler(
                                  rowIndex,
                                  dataState,
                                  setDataState
                                );
                              }}
                            >
                              <span>Options</span>
                              <ArrowDown dimensions="16px" />
                              {item?.isActive && (
                                <div
                                  className={classes.options}
                                  ref={optionsDiv}
                                >
                                  {options?.map((option) => {
                                    return (
                                      <span
                                        onClick={() => {
                                          option.action(
                                            String(Object.values(item)[5])
                                          );
                                        }}
                                      >
                                        {option.text}
                                      </span>
                                    );
                                  })}
                                  {(
                                    String(Object.values(item)[0]) as string
                                  ).includes("Motor") && (
                                    <span>Renew Vehicle Papers</span>
                                  )}

                                  {moment(endDate).diff(today) < 14 && (
                                    <span>Renew Vehicle Papers</span>
                                  )}

                                  {String(Object.values(item)[6]) ===
                                    "true" && (
                                    <span
                                      onClick={() => {
                                        router.push(routes?.TRACKER);
                                      }}
                                    >
                                      Track Vehicle
                                    </span>
                                  )}
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
          </>
        ) : (
          <p className={classes.paragraph}>No data available</p>
        )}
      </div>
    </>
  );
};

export default Table;
