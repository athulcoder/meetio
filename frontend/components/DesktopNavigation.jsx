"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/NavItems";

import { FiMenu } from "react-icons/fi";
const DesktopNavigation = ({ open, setOpen }) => {
  const pathname = usePathname();

  useEffect(() => {}, [pathname, open]);
  const handleDesktopCollab = () => {
    console.log("Hi");
    setOpen((prev) => !prev);
  };

  return (
    <nav
      className={` flex-col left-0 ${
        open ? "min-w-[230px]" : "min-w-[90px]"
      } fixed transition-all duration-300 ease-in-out  h-full bg-bluish-white flex items-center justify-center shadow-black shadow-2xl overflow-y-hidden max-md:hidden z-100 `}
    >
      <div
        className={`bg-primary-blue text-bluish-white flex  w-[90%] p-2 items-center rounded-2xl my-3 ${
          !open ? " justify-center items-center " : "justify-between"
        } `}
      >
        <h1
          className={`font-sans text-2xl font-light  ${
            !open ? "hidden" : ""
          }   `}
        >
          MEETIO
        </h1>

        <FiMenu
          size={23}
          className="font-bold cursor-pointer"
          onClick={handleDesktopCollab}
        />
      </div>
      <ul className="flex w-full h-full  items-center justify-start gap-10 flex-col pt-3 ">
        {NAV_ITEMS.map(({ iconOff, iconOn, url, label }) => {
          let isActive;
          isActive = pathname === url;
          const IconOFF = iconOff;
          const IconON = iconOn;
          return (
            <li
              key={label}
              className={`flex items-center gap-2  bg-[#eaeaea] w-[90%] box-border  rounded-2xl ${
                !open
                  ? "justify-center h-[50px] w-[50px] "
                  : "justify-start px-2 py-3"
              }`}
            >
              <Link href={url} className="flex flex-row-reverse gap-3">
                <p className={`text-sm font-semibold ${!open ? "hidden" : ""}`}>
                  {label}
                </p>

                {isActive ? (
                  <IconON size={open ? 23 : 26} />
                ) : (
                  <IconOFF size={open ? 23 : 26} />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
