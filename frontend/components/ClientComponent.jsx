"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const ClientComponent = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-bluish-white flex min-h-screen justify-center">
      <DesktopNavigation open={open} setOpen={setOpen} />

      <MobileNavigation />

      {/*  ${
          open ? "min-md:ml-[227px]" : "min-md:ml-[87px]"
        } */}
      <main
        className={`h-screen max-md:w-full w-[70%] ${
          open ? "min-md:ml-[227px]" : ""
        } fixed transition-all duration-100 ease-in-out overflow-hidden p-1  bg-background shadow-gray-300 shadow-sm`}
      >
        {children}
      </main>
    </div>
  );
};

export default ClientComponent;
