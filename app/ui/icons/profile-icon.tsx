import Image from "next/image";
import ProfileIconSVG from "@/public/icons/user-regular.svg";

const ProfileIcon = () => {
  return <Image src={ProfileIconSVG} alt="Profile Icon" />;
};

export default ProfileIcon;
