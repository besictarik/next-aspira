"use client";

import StatsIconSVG from "@/public/icons/chart-simple-solid.svg";
import CompanyIconSVG from "@/public/icons/building-regular.svg";
import CollegeIconSVG from "@/public/icons/graduation-cap-solid.svg";
import ProfileIconSVG from "@/public/icons/user-regular.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const data = [
  {
    name: "Info",
    icon: StatsIconSVG,
    href: "/dashboard/info",
  },
  {
    name: "Students",
    icon: ProfileIconSVG,
    href: "/dashboard/students",
  },
  {
    name: "Professors",
    icon: ProfileIconSVG,
    href: "/dashboard/professors",
  },
  {
    name: "Mentors",
    icon: ProfileIconSVG,
    href: "/dashboard/mentors",
  },
  {
    name: "Colleges",
    icon: CollegeIconSVG,
    href: "/dashboard/college",
  },
  {
    name: "Companies",
    icon: CompanyIconSVG,
    href: "/dashboard/company",
  },
];

const NavLinks = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname();

  return (
    <div className={`${isOpen ? "ml-[30px]" : "ml-[13px]"} mt-[15px]`}>
      <span className="sr-only">Navigation</span>
      <ul className="flex flex-col">
        {data.map((link) => (
          <li>
            <Link
              href={link.href}
              className={`group inline-flex w-full items-center rounded-s-lg transition-all delay-0 duration-300 ease-in-out hover:bg-[#FFFFFFB3] ${
                isOpen ? "px-[50px] py-[25px]" : "px-[15px] py-4"
              }`}
            >
              <Image
                src={link.icon}
                alt={`${link.name} icon`}
                className={`${isOpen ? "mr-[25px]" : ""} h-5 w-5`}
              />
              <span
                className={`text-lg group-hover:text-white ${
                  link.href === pathname ? "text-white" : "text-[#FFFFFFB3]"
                } ${isOpen ? "block" : "hidden"}`}
              >
                {link.name}
              </span>
            </Link>
          </li>
          // <li
          //   className={`inline-flex items-center transition-all delay-0 duration-300 ease-in-out ${
          //     isOpen ? "px-[50px] py-[25px]" : "px-[15px] py-4"
          //   }`}
          // >
          //   <Image
          //     src={link.icon}
          //     alt={`${link.name} icon`}
          //     className={`${isOpen ? "mr-[25px]" : ""} h-5 w-5`}
          //   />
          //   <Link
          //     className={`text-lg hover:text-white ${
          //       link.href === pathname ? "text-white" : "text-[#FFFFFFB3]"
          //     } ${isOpen ? "block" : "hidden"}`}
          //     href={link.href}
          //   >
          //     {link.name}
          //   </Link>
          // </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
