import { useState } from "react";
import classes from "./SideNav.module.css";
import { headerRoutes } from "@/utilities/routes";
import { activeToggler } from "@/helpers/activeHandlers";
import ArrowDown from "@/assets/svgIcons/ArrowDown";
import Link from "next/link";
import Close from "@/assets/svgIcons/Close";
import { routes } from "@/utilities/routes";
import Button from "@/components/Button/Button";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";

type SidenavTypes = {
  onClose: () => void;
};

const Sidenav = ({ onClose }: SidenavTypes) => {
  // States
  const [navItems, setNavItems] = useState(headerRoutes);

  //   Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  return (
    <section className={classes.container}>
      <div>
        <Close onClick={onClose} />
      </div>
      <nav>
        <Link href={routes?.BASE_URL}>Home</Link>
        {navItems?.map((route, i) => {
          if (route.children) {
            return (
              <div
                className={classes.moreOptions}
                onClick={() => activeToggler(i, navItems, setNavItems)}
                key={i}
              >
                <span>{route?.title}</span>
                <ArrowDown />

                <div
                  className={classes.children}
                  style={
                    route?.isActive
                      ? { maxHeight: "2000px" }
                      : { maxHeight: "0px" }
                  }
                >
                  {route?.children?.map((data, j) => {
                    if ((data?.children?.length as number) > 0) {
                      return (
                        <div
                          className={classes.moreOptions}
                          key={j}
                          onClick={(e) => {
                            e.stopPropagation();
                            setNavItems((prevState) => {
                              const updatedState = prevState;
                              if (updatedState[i].children) {
                                if (
                                  updatedState[i]?.children[j].isActive ===
                                  false
                                ) {
                                  updatedState[i].children[j].isActive = true;
                                } else {
                                  updatedState[i].children[j].isActive = false;
                                }
                              }
                              return updatedState;
                            });
                          }}
                        >
                          <span>{data?.title}</span>
                          <ArrowDown />

                          <div
                            className={classes.children}
                            style={
                              !data?.isActive
                                ? { maxHeight: "2000px" }
                                : { maxHeight: "0px" }
                            }
                          >
                            {data?.children?.map((datum, k) => {
                              return (
                                <Link
                                  href={`${data?.route}${datum?.route}`}
                                  key={k}
                                >
                                  {datum?.title}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <Link href={data?.route} key={j}>
                        {data?.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }
          return (
            <Link key={i} href={route?.route}>
              {route?.title}
            </Link>
          );
        })}
      </nav>

      <Button
        onClick={() => {
          updateSearchParams("auth", "sign-in", "set");
        }}
        type="secondary"
      >
        Sign In
      </Button>
    </section>
  );
};

export default Sidenav;
