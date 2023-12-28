import Image from "next/image";
import FaceBookIconSVG from "@/public/icons/facebook-f.svg";

const FaceBookIcon = () => {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded border bg-white">
      <Image src={FaceBookIconSVG} alt="FaceBook Logo" />
    </div>
  );
};

export default FaceBookIcon;
