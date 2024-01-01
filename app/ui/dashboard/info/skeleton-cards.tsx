import { twMerge } from "tailwind-merge";

const SkeletonCards = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-[30px]">
      <SkeletonCard className="basis-full sm:basis-[calc(50%-60px/2)] 2xl:basis-[calc(25%-90px/4)]" />
      <SkeletonCard className="basis-full bg-[#48a9f8] sm:basis-[calc(50%-60px/2)] 2xl:basis-[calc(25%-90px/4)]" />
      <SkeletonCard className="basis-full bg-[#1bd084] sm:basis-[calc(50%-60px/2)] 2xl:basis-[calc(25%-90px/4)]" />
      <SkeletonCard className="basis-full bg-[#8bc740] sm:basis-[calc(50%-60px/2)] 2xl:basis-[calc(25%-90px/4)]" />
    </div>
  );
};

export default SkeletonCards;

const SkeletonCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        `flex items-center justify-between rounded-[1.25rem] bg-[#ff0000b8] p-[30px] ${className}`,
      )}
    >
      <div className="h-[70px] w-[70px] rounded-[1.25rem] bg-gray-100" />
      <div className="ml-3 flex flex-col items-end">
        <div className="mb-2 h-7 w-[180px] rounded-md bg-gray-100" />
        <div className="h-[58px] w-[29px] rounded-md bg-gray-100"></div>
      </div>
    </div>
  );
};
