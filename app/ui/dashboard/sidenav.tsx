"use client";

import React, { useState } from "react";
import AspiraLogo from "../aspira-logo-white";
import NavLinks from "./nav-links";
import HamburgerMenu from "./header/hamburger-menu";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`min-h-full ${
        isOpen ? `w-[345px]` : `w-20`
      } relative z-10 bg-white transition-all delay-0 duration-300 ease-in-out after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-[#ff0000b8] after:transition-all after:delay-0 after:duration-300 after:ease-in-out after:content-['']`}
    >
      <div className="relative flex h-[120px] items-center">
        <AspiraLogo
          className={`ml-20 w-40 min-w-40 pt-[5px] ${
            isOpen ? "block" : "hidden"
          }`}
        />
        <div className="absolute right-0">
          <button
            className="absolute -top-5 left-6 h-10 w-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HamburgerMenu className="absolute left-0 top-0" />
          </button>
        </div>
      </div>
      <NavLinks isOpen={isOpen} />
    </div>
  );
};

export default SideNav;
