import Image from "next/image";
import ProfilePhoto from "@/public/profile-photo.jpeg";
import DeleteCollege from "./delete-college-button";
import EditCollege from "./edit-college-button";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { fetchColleges } from "@/app/lib/data";

const data = [
  {
    id: 1,
    name: "University of ABC",
    address: "123 Main Street, City A, State X",
    type: "University",
    public_private: "Public",
    programs: ["Computer Science", "Biology", "Business Administration"],
  },
  {
    id: 2,
    name: "XYZ College",
    address: "456 Elm Street, City B, State Y",
    type: "College",
    public_private: "Private",
    programs: ["Engineering", "Psychology", "Visual Arts"],
  },
  {
    id: 3,
    name: "University of DEF",
    address: "789 Oak Street, City C, State Z",
    type: "University",
    public_private: "Public",
    programs: ["Medicine", "Economics", "Mathematics"],
  },
  {
    id: 4,
    name: "PQR University",
    address: "101 Pine Street, City D, State W",
    type: "University",
    public_private: "Private",
    programs: ["Law", "Chemistry", "Sociology"],
  },
  {
    id: 5,
    name: "LMN College",
    address: "222 Cedar Street, City E, State V",
    type: "College",
    public_private: "Public",
    programs: ["Environmental Science", "History", "Communication"],
  },
  {
    id: 6,
    name: "STU Institute",
    address: "333 Maple Street, City F, State U",
    type: "Institute",
    public_private: "Private",
    programs: ["Data Science", "Graphic Design", "Music Production"],
  },
  {
    id: 7,
    name: "UVW University",
    address: "444 Birch Street, City G, State T",
    type: "University",
    public_private: "Public",
    programs: ["Physics", "Political Science", "Foreign Languages"],
  },
];

const CollegesTable = async () => {
  const cookiestore = cookies();
  const supabase = createClient(cookiestore);
  const colleges = await fetchColleges(supabase);
  return (
    <div className="rounded-[1.25rem] bg-white p-[30px]">
      <table className="w-full">
        <thead>
          <tr className="flex w-full pb-[30px]">
            <th scope="col" className="basis-1/12">
              <span className="sr-only">Profile Images</span>
            </th>
            <th scope="col" className="basis-3/12 text-start">
              Name
            </th>
            <th scope="col" className="basis-1/12 text-start">
              Type
            </th>
            <th scope="col" className="basis-2/12 text-start">
              Address
            </th>
            <th scope="col" className="basis-1/12 text-start">
              Sector
            </th>
            <th scope="col" className="basis-3/12 text-start">
              Programs
            </th>
            <th scope="col" className="basis-1/12">
              <span className="sr-only">Edit & Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {colleges?.map((college) => (
            <tr key={college.id} className="flex w-full items-center py-2">
              <td className="basis-1/12">
                <Image
                  src={ProfilePhoto}
                  alt="Mentor Profile Photo"
                  className="h-8 w-8 rounded-full"
                />
              </td>
              <td className="basis-3/12">{college.name}</td>
              <td className="basis-1/12">{college.type}</td>
              <td className="basis-2/12">{college.address}</td>
              <td className="basis-1/12">{college.sector}</td>
              <td className="basis-3/12">
                {college.programs.map((program: string, index: number) => (
                  <span key={index} className="mr-2 inline-block">
                    {program}
                  </span>
                ))}
              </td>
              <td className="flex basis-1/12 gap-3">
                <DeleteCollege />
                <EditCollege id={college.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollegesTable;
