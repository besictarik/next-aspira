import CreateButton from "@/app/ui/dashboard/create-button";
import SearchBar from "@/app/ui/dashboard/searchbar";
import CollegesTable from "@/app/ui/dashboard/colleges/table";
import { Suspense } from "react";
import SkeletonCollegesTable from "@/app/ui/dashboard/colleges/skeleton-table";

const Colleges = ({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) => {
  return (
    <div className="w-full">
      <div className="mb-5 mt-8 flex items-center justify-between gap-2 md:mt-8">
        <SearchBar placeholder="Search colleges..." />
        <CreateButton text="Add College" href={"/dashboard/colleges/add"} />
      </div>
      <Suspense fallback={<SkeletonCollegesTable />}>
        <CollegesTable />
      </Suspense>
    </div>
  );
};

export default Colleges;
