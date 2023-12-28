import Image from "next/image";
import CollegeIconSVG from "@/public/icons/building-regular.svg";

const CollegeIcon = ({ className }: { className?: string }) => {
  return (
    <Image src={CollegeIconSVG} alt="College Icon" className={className} />
  );
};

export default CollegeIcon;
