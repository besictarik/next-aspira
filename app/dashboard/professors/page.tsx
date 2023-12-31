import CreateButton from "@/app/ui/dashboard/create-button";
import SearchBar from "@/app/ui/dashboard/searchbar";
import ProfessorsTable from "@/app/ui/dashboard/professors/table";
import { Suspense } from "react";
import SkeletonProfessorsTable from "@/app/ui/dashboard/professors/skeleton-table";

const Professors = ({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) => {
  return (
    <div className="w-full">
      <div className="mb-5 mt-8 flex items-center justify-between gap-2 md:mt-8">
        <SearchBar placeholder="Search professors..." />
        <CreateButton text="Add Professor" href={"/dashboard/professors/add"} />
      </div>
      <Suspense fallback={<SkeletonProfessorsTable />}>
        <ProfessorsTable />
      </Suspense>
    </div>
  );
};

export default Professors;
