import Image from "next/image";
import LinkedinLogo from "@/public/icons/linkedin-in.svg";

const Linkedin = () => {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded border bg-white">
      <Image src={LinkedinLogo} alt="Linkedin Logo" />
    </div>
  );
};

export default Linkedin;
