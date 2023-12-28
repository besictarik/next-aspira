"use client";

import HamburgerMenu from "./hamburger-menu";
import { usePathname } from "next/navigation";
import { capitalizeFirstLetter } from "@/app/lib/utils";
import SearchBar from "./searchbar";
import User from "./user";

const DashboardHeader = () => {
  const pathname = usePathname();
  const section = capitalizeFirstLetter(pathname.split("/")[2]);
  // If pathname is /dashboard, section will be Dashboard

  return (
    <div className="flex h-[120px] w-full items-center justify-between rounded-tl-[50px] bg-[#f2f2f2] pl-6 pr-10">
      <div className="flex">
        <HamburgerMenu />
        <h3 className="pl-6 text-3xl font-semibold">{section}</h3>
      </div>
      {/* Search Bar */}
      <div className="flex ">
        <SearchBar />
        <User />
      </div>
    </div>
  );
};

export default DashboardHeader;
