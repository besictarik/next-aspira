import Image from "next/image";
import FaceBookLogo from "@/public/icons/facebook-f.svg";

const FaceBook = () => {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded border bg-white">
      <Image src={FaceBookLogo} alt="FaceBook Logo" />
    </div>
  );
};

export default FaceBook;
