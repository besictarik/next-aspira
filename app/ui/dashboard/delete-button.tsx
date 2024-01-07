import TrashIcon from "@/public/icons/trash-solid.svg";
import Image from "next/image";

const DeleteButton = () => {
  return (
    <button
      type="submit"
      className="flex items-center justify-center rounded-md border border-[#e5e7eb] p-2 hover:cursor-pointer hover:bg-gray-100"
    >
      <Image
        src={TrashIcon}
        alt="Trash - Delete Icon"
        className="min-h-5 min-w-5"
      />
    </button>
  );
};

export default DeleteButton;
