import CreateButton from "@/app/ui/dashboard/create-button";
import SearchBar from "@/app/ui/dashboard/searchbar";
import StudentsTableSkeleton from "@/app/ui/dashboard/students/skeleton-table";
import StudentsTable from "@/app/ui/dashboard/students/table";
import { Suspense } from "react";

const Students = ({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) => {
  return (
    <div className="w-full">
      <div className="mb-5 mt-8 flex items-center justify-between gap-2 md:mt-8">
        <SearchBar placeholder="Search students..." />
        <CreateButton text="Add Student" href={"/dashboard/students/add"} />
      </div>
      <Suspense fallback={<StudentsTableSkeleton />}>
        <StudentsTable />
      </Suspense>
    </div>
  );
};

export default Students;
