import Image from "next/image";
import logo_red from "@/public/aspira-uciliste-crveni.png";
import { twMerge } from "tailwind-merge";

const AspiraLogo = ({ className }: { className?: string }) => {
  return (
    <Image
      className={twMerge(`w-60 ${className}`)}
      src={logo_red}
      alt="Aspira Logo"
      priority
    />
  );
};

export default AspiraLogo;
