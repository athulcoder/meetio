"use client";
import { NAV_ITEMS } from "@/constants/NavItems";
import React from "react";
import { usePathname } from "next/navigation";
const MobileNavigation = () => {
  let pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="fixed bottom-0 w-full h-[50px] bg-bluish-white flex items-center justify-center shadow-black shadow-2xl shadow- ">
      <ul className="flex w-full h-full  items-center justify-around">
        {NAV_ITEMS.map(({ iconOff, iconOn, url, label }) => {
          let isActive;
          isActive = pathname === url;
          const IconOFF = iconOff;
          const IconON = iconOn;
          return (
            <li key={label} className="">
              <a href={url} className="">
                {isActive ? <IconON size={23} /> : <IconOFF size={23} />}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNavigation;
