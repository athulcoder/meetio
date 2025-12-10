"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/NavItems";

import { FiMenu } from "react-icons/fi";
const DesktopNavigation = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed flex-col left-0  min-w-[230px] max-w-[30%] h-full bg-bluish-white flex items-center justify-center shadow-black shadow-2xl overflow-y-hidden ">
      <div className="bg-primary-blue text-bluish-white flex justify-between w-[90%] p-2 items-center rounded-2xl my-3">
        <h1 className="font-sans text-2xl font-light    ">MEETIO</h1>

        <FiMenu size={23} className="font-bold " />
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
              className="flex items-center gap-2 justify-start bg-[#eaeaea] w-[90%] box-border px-2 py-3 rounded-2xl"
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
