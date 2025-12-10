"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/NavItems";
const DesktopNavigation = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 min-w-[230px] max-w-[30%] h-full bg-bluish-white flex items-center justify-center shadow-black shadow-2xl overflow-y-hidden ">
      <ul className="flex w-full h-full  items-center justify-start gap-10 flex-col pt-3 ">
        {NAV_ITEMS.map(({ iconOff, iconOn, url, label }) => {
          let isActive;
          isActive = pathname === url;
          const IconOFF = iconOff;
          const IconON = iconOn;
          return (
            <li
              key={label}
              className="flex items-center gap-2 justify-start bg-[#eaeaea] w-[90%] box-border p-2 rounded-2xl"
            >
              <Link href={url} className="flex flex-row-reverse gap-3">
                <p className="text-sm font-semibold ">{label}</p>

                {isActive ? <IconON size={23} /> : <IconOFF size={23} />}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
