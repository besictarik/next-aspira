import React from "react";
import AspiraLogo from "../aspira-logo-white";

const SideNav = () => {
  return (
    <div className="min-h-full w-[345px] bg-[#ff0000b8]">
      <div className="flex h-[120px] items-center">
        <AspiraLogo className="ml-20 w-40" />
      </div>
    </div>
  );
};

export default SideNav;
