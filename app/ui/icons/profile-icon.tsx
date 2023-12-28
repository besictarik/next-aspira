import Image from "next/image";
import ProfileIconSVG from "@/public/icons/user-regular.svg";

const ProfileIcon = ({ className }: { className?: string }) => {
  return (
    <Image src={ProfileIconSVG} alt="Profile Icon" className={className} />
  );
};

export default ProfileIcon;
