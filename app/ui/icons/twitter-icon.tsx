import Image from "next/image";
import TwitterIconSVG from "@/public/icons/twitter.svg";

const TwitterIcon = () => {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded border bg-white">
      <Image src={TwitterIconSVG} alt="Twitter Logo" />
    </div>
  );
};

export default TwitterIcon;
