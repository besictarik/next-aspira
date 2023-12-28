import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Card = ({
  image,
  content,
  number,
  className,
}: {
  image: string;
  content: string;
  number: number;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        `flex items-center justify-between rounded-[1.25rem] bg-[#ff0000b8] p-[30px] ${className}`,
      )}
    >
      <div className="min-w-[70px] rounded-[1.25rem] border border-white p-4">
        <Image src={image} alt="" className="h-9 w-9" />
      </div>
      <div className="ml-3 flex flex-col items-end">
        <p className="pb-2 text-end text-lg text-white">{content}</p>
        <span className="text-5xl font-semibold leading-[1.2] text-white">
          {number}
        </span>
      </div>
    </div>
  );
};

export default Card;
