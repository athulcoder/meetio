import React from "react";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <div>
      <div className="max-md:hidden">
        <DesktopNavigation />
      </div>
      <div className="min-md:hidden">
        <MobileNavigation />
      </div>
    </div>
  );
};

export default Navbar;
