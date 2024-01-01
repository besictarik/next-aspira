import Cards from "@/app/ui/dashboard/info/cards";
import SkeletonCards from "@/app/ui/dashboard/info/skeleton-cards";
import { Suspense } from "react";

const Info = async () => {
  return (
    <Suspense fallback={<SkeletonCards />}>
      <Cards />
    </Suspense>
  );
};

export default Info;
