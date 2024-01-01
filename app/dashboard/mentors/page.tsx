import CreateButton from "@/app/ui/dashboard/create-button";
import SearchBar from "@/app/ui/dashboard/searchbar";
import MentorsTable from "@/app/ui/dashboard/mentors/table";

const Mentors = ({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) => {
  return (
    <div className="w-full">
      <div className="mb-5 mt-8 flex items-center justify-between gap-2 md:mt-8">
        <SearchBar placeholder="Search mentors..." />
        <CreateButton text="Add Mentor" href={"/dashboard/mentors/add"} />
      </div>
      <MentorsTable />
    </div>
  );
};

export default Mentors;
