import React from "react";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <div>
      <div className="">
        <DesktopNavigation />
      </div>
      <div className="">
        <MobileNavigation />
      </div>
    </div>
  );
};

export default Navbar;
