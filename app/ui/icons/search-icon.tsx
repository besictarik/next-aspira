import Image from "next/image";
import SearchIconSVG from "@/public/icons/magnifying-glass-solid.svg";

const SearchIcon = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <Image src={SearchIconSVG} alt="Search Icon" />
    </div>
  );
};

export default SearchIcon;
