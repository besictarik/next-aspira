import Image from "next/image";
import ProfilePhoto from "@/public/profile-photo.jpeg";
import DeleteStudent from "./delete-student-button";
import EditStudent from "./edit-student-button";
import { fetchStudents } from "@/app/lib/data";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

const StudentsTable = async () => {
  const cookiestore = cookies();
  const supabase = createClient(cookiestore);
  const students = await fetchStudents(supabase);

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
              Course
            </th>
            <th scope="col" className="basis-3/12 text-start">
              Email
            </th>
            <th scope="col" className="basis-1/12">
              <span className="sr-only">Edit & Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => (
            <tr key={student.id} className="flex w-full items-center py-2">
              <td className="basis-1/12">
                <Image
                  src={ProfilePhoto}
                  alt="Student Profile Photo"
                  className="h-8 w-8 rounded-full"
                />
              </td>
              <td className="basis-2/12">
                {student.name} {student.surname}
              </td>
              <td className="basis-2/12">{student.college.name}</td>
              <td className="basis-2/12">{student.course}</td>
              <td className="basis-4/12">{student.email}</td>
              <td className="flex basis-1/12 gap-3">
                <DeleteStudent />
                <EditStudent id={student.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
