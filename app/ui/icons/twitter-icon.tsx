import Image from "next/image";
import TwitterLogo from "@/public/icons/twitter.svg";

const Twitter = () => {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded border bg-white">
      <Image src={TwitterLogo} alt="Twitter Logo" />
    </div>
  );
};

export default Twitter;
