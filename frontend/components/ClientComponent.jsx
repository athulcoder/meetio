"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const ClientComponent = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <DesktopNavigation open={open} setOpen={setOpen} />

      <MobileNavigation />

      <div
        className={`h-screen w-full ${
          open ? "min-md:ml-[227px]" : "min-md:ml-[87px]"
        } fixed transition-all duration-100 ease-in-out overflow-hidden p-1  `}
      >
        {children}
      </div>
    </>
  );
};

export default ClientComponent;
