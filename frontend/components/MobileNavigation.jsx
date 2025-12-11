"use client";
import { NAV_ITEMS } from "@/constants/NavItems";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const MobileNavigation = () => {
  let pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="fixed bottom-0 w-full h-[50px] bg-bluish-white flex items-center justify-center shadow-black shadow-2xl min-md:hidden">
      <ul className="flex w-full h-full  items-center justify-around">
        {NAV_ITEMS.map(({ iconOff, iconOn, url, label }) => {
          let isActive;
          isActive = pathname === url;
          const IconOFF = iconOff;
          const IconON = iconOn;
          return (
            <li key={label} className="">
              <Link href={url} className="">
                {isActive ? <IconON size={23} /> : <IconOFF size={23} />}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNavigation;
