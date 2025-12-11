"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const ClientComponent = ({ children }) => {
  const [open, setOpen] = useState();
  return (
    <div>
      <DesktopNavigation open={open} setOpen={setOpen} />

      <MobileNavigation />

      <div className="min-md:ml-[230px] h-screen  ">{children}</div>
    </div>
  );
};

export default ClientComponent;
