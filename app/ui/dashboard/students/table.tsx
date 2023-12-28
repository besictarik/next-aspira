import Image from "next/image";
import ProfilePhoto from "@/public/profile-photo.jpeg";
import DeleteStudent from "./delete-student-button";
import EditStudent from "./edit-student-button";

const data = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    college: "ABC University",
    course: "Computer Science",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane",
    surname: "Smith",
    college: "XYZ College",
    course: "Engineering",
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    name: "Alice",
    surname: "Johnson",
    college: "DEF University",
    course: "Medicine",
    email: "alice.johnson@example.com",
  },
  {
    id: 4,
    name: "Michael",
    surname: "Brown",
    college: "GHI College",
    course: "Business Administration",
    email: "michael.brown@example.com",
  },
  {
    id: 5,
    name: "Emma",
    surname: "Garcia",
    college: "LMN University",
    course: "Psychology",
    email: "emma.garcia@example.com",
  },
  {
    id: 6,
    name: "Daniel",
    surname: "Martinez",
    college: "PQR College",
    course: "Economics",
    email: "daniel.martinez@example.com",
  },
  {
    id: 7,
    name: "Sophia",
    surname: "Anderson",
    college: "STU University",
    course: "Biology",
    email: "sophia.anderson@example.com",
  },
  {
    id: 8,
    name: "Liam",
    surname: "Wilson",
    college: "VWX College",
    course: "Mathematics",
    email: "liam.wilson@example.com",
  },
];

const StudentsTable = () => {
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
          {data.map((student) => (
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
              <td className="basis-2/12">{student.college}</td>
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
