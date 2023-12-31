import Image from "next/image";
import ProfilePhoto from "@/public/profile-photo.jpeg";
import DeleteMentor from "./delete-mentor-button";
import EditMentor from "./edit-mentor-button";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { fetchMentors } from "@/app/lib/data";

const MentorsTable = async () => {
  const cookiestore = cookies();
  const supabase = createClient(cookiestore);
  const mentors = await fetchMentors(supabase);

  return (
    <div className="rounded-[1.25rem] bg-white p-[30px]">
      <table className="w-full">
        <thead>
          <tr className="flex w-full pb-[30px]">
            <th scope="col" className="basis-1/12">
              <span className="sr-only">Profile Images</span>
            </th>
            <th scope="col" className="basis-2/12 text-start">
              Full Name
            </th>
            <th scope="col" className="basis-2/12 text-start">
              College
            </th>
            <th scope="col" className="basis-2/12 text-start">
              Phone
            </th>
            <th scope="col" className="basis-3/12 text-start">
              Available
            </th>
            <th scope="col" className="basis-1/12">
              <span className="sr-only">Edit & Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {mentors?.map((mentor) => (
            <tr key={mentor.id} className="flex w-full items-center py-2">
              <td className="basis-1/12">
                <Image
                  src={ProfilePhoto}
                  alt="Mentor Profile Photo"
                  className="h-8 w-8 rounded-full"
                />
              </td>
              <td className="basis-2/12">
                {mentor.name} {mentor.surname}
              </td>
              <td className="basis-2/12">{mentor.college.name}</td>
              <td className="basis-2/12">{mentor.phone}</td>
              <td className="basis-4/12">{`${
                mentor.available ? "✅" : "❌"
              }`}</td>
              <td className="flex basis-1/12 gap-3">
                <DeleteMentor />
                <EditMentor id={mentor.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MentorsTable;
