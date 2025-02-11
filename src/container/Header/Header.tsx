"use client";

import { headerRoutes, routes } from "@/utilities/routes";
import classes from "./Header.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ArrowDown from "@/assets/svgIcons/ArrowDown";
import Button from "@/components/Button/Button";
import { activeToggler } from "@/helpers/activeHandlers";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import Logo from "@/components/Logo/Logo";
import Hamburger from "@/assets/svgIcons/Hamburger";

const Header = () => {
  // States
  const [navItemsState, setNavItemsState] = useState(headerRoutes);

  // Utils
  const activeNavItem = navItemsState?.find((data) => data?.isActive);

  // Refs
  const headerDropdownRef = useRef<HTMLDivElement | null>(null);

  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  // Effects
  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const removeChildrenHandler = (e: any) => {
        if (
          headerDropdownRef?.current &&
          !headerDropdownRef?.current?.contains(e?.target)
        ) {
          setNavItemsState((prevState) => {
            return prevState?.map((data) => {
              return { ...data, isActive: false };
            });
          });
        }
      };

      document.addEventListener("mousedown", removeChildrenHandler);

      return () => {
        document.removeEventListener("mousedown", removeChildrenHandler);
      };
    }
  }, []);

  return (
    <header className={classes.container}>
      <Logo />

      <nav>
        {navItemsState?.map((data, i) => {
          if ((data?.children?.length as number) > 0) {
            return (
              <div
                onClick={() => {
                  activeToggler(i, navItemsState, setNavItemsState);
                }}
                className={data?.isActive ? classes.active : undefined}
                key={i}
              >
                <span>{data?.title}</span>
                <ArrowDown />
              </div>
            );
          } else {
            return (
              <Link href={data?.route as string} key={i}>
                {data?.title}
              </Link>
            );
          }
        })}
      </nav>

      <div className={classes.buttonSection}>
        <Button
          onClick={() => {
            updateSearchParams("auth", "sign-in", "set");
          }}
        >
          Sign in
        </Button>
      </div>

      <div
        className={classes.children}
        style={activeNavItem ? { maxHeight: "1000px" } : { maxHeight: "0px" }}
        ref={headerDropdownRef}
      >
        {activeNavItem?.component}
      </div>

      <div className={classes.hamburger}>
        <Hamburger />
      </div>
    </header>
  );
};

export default Header;
