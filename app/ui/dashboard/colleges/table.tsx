import Image from "next/image";
import ProfilePhoto from "@/public/profile-photo.jpeg";
import DeleteCollege from "./delete-college-button";
import EditCollege from "./edit-college-button";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { fetchColleges } from "@/app/lib/data";

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
