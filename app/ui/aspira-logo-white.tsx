import Image from "next/image";
import logo_white from "@/public/aspira-uciliste-bijeli.png";
import { twMerge } from "tailwind-merge";

const AspiraLogo = ({ className }: { className?: string }) => {
  return (
    <Image
      className={twMerge(`w-60 min-w-60 ${className}`)}
      src={logo_white}
      alt="Aspira Logo"
      priority
    />
  );
};

export default AspiraLogo;
