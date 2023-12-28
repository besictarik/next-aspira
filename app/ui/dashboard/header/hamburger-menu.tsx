import React from "react";
import { twMerge } from "tailwind-merge";

const HamburgerMenu = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        `group flex h-10 w-10 items-center justify-center  hover:cursor-pointer ${className}`,
      )}
    >
      <div className="flex h-5 flex-col items-end justify-between">
        <span className="h-[3px] w-[20px] rounded-[3px] bg-[#ff0000b8] transition-all delay-0 duration-300 ease-in-out group-hover:w-[26px]"></span>
        <span className="h-[3px] w-[26px] rounded-[3px] bg-[#ff0000b8] transition-all delay-0 duration-300 ease-in-out"></span>
        <span className="h-[3px] w-[22px] rounded-[3px] bg-[#ff0000b8] transition-all delay-0 duration-300 ease-in-out group-hover:w-[26px]"></span>
      </div>
    </div>
  );
};

export default HamburgerMenu;
