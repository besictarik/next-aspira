import Image from "next/image";
import LinkedinIconSVG from "@/public/icons/linkedin-in.svg";

const LinkedinIcon = () => {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded border bg-white">
      <Image src={LinkedinIconSVG} alt="Linkedin Logo" />
    </div>
  );
};

export default LinkedinIcon;
