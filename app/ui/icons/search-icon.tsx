import Image from "next/image";
import SearchIconSvg from "@/public/icons/magnifying-glass-solid.svg";

const SearchIcon = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <Image src={SearchIconSvg} alt="Search Icon" />
    </div>
  );
};

export default SearchIcon;
