import Image from "next/image";
import ProfilePhoto from "@/public/profile-photo.jpeg";
import DeleteProfessor from "./delete-professor-button";
import EditProfessor from "./edit-professor-button";
import { fetchProfessors } from "@/app/lib/data";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

const data = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    college: "University of ABC",
    specialization: "Computer Science",
    email: "johndoe@example.com",
  },
  {
    id: 2,
    name: "Emily",
    surname: "Smith",
    college: "XYZ College",
    specialization: "Electrical Engineering",
    email: "emilysmith@example.com",
  },
  {
    id: 3,
    name: "Michael",
    surname: "Johnson",
    college: "University of DEF",
    specialization: "Business Administration",
    email: "michaeljohnson@example.com",
  },
  {
    id: 4,
    name: "Sophia",
    surname: "Brown",
    college: "PQR University",
    specialization: "Psychology",
    email: "sophiabrown@example.com",
  },
  {
    id: 5,
    name: "Alice",
    surname: "Davis",
    college: "LMN College",
    specialization: "Environmental Science",
    email: "alicedavis@example.com",
  },
  {
    id: 6,
    name: "William",
    surname: "Garcia",
    college: "STU Institute",
    specialization: "Mechanical Engineering",
    email: "williamgarcia@example.com",
  },
  {
    id: 7,
    name: "Olivia",
    surname: "Martinez",
    college: "UVW University",
    specialization: "Medicine",
    email: "oliviamartinez@example.com",
  },
];

const ProfessorsTable = async () => {
  const cookiestore = cookies();
  const supabase = createClient(cookiestore);
  const professors = await fetchProfessors(supabase);
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
              Specialization
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
          {professors?.map((professor) => (
            <tr key={professor.id} className="flex w-full items-center py-2">
              <td className="basis-1/12">
                <Image
                  src={ProfilePhoto}
                  alt="Professor Profile Photo"
                  className="h-8 w-8 rounded-full"
                />
              </td>
              <td className="basis-2/12">
                {professor.name} {professor.surname}
              </td>
              <td className="basis-2/12">{professor.college.name}</td>
              <td className="basis-2/12">{professor.specialization}</td>
              <td className="basis-4/12">{professor.email}</td>
              <td className="flex basis-1/12 gap-3">
                <DeleteProfessor />
                <EditProfessor id={professor.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfessorsTable;
