import Image from "next/image";
import PenIcon from "@/public/icons/pen-solid.svg";

const EditButton = () => {
  return (
    <div className="flex items-center justify-center rounded-md border border-[#e5e7eb] p-2 hover:cursor-pointer hover:bg-gray-100">
      <Image src={PenIcon} alt="Pen - Edit Icon" className="min-h-5 min-w-5" />
    </div>
  );
};

export default EditButton;
