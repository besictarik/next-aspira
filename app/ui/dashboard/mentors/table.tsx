import Image from "next/image";
import ProfilePhoto from "@/public/profile-photo.jpeg";
import DeleteMentor from "./delete-mentor-button";
import EditMentor from "./edit-mentor-button";

const data = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    college: "University of ABC",
    phone: "+1234567890",
    availability: true,
  },
  {
    id: 2,
    name: "Emily",
    surname: "Smith",
    college: "XYZ College",
    phone: "+1987654321",
    availability: false,
  },
  {
    id: 3,
    name: "Michael",
    surname: "Johnson",
    college: "University of DEF",
    phone: "+1122334455",
    availability: true,
  },
  {
    id: 4,
    name: "Sophia",
    surname: "Brown",
    college: "PQR University",
    phone: "+1555099887",
    availability: true,
  },
  {
    id: 5,
    name: "Alice",
    surname: "Davis",
    college: "LMN College",
    phone: "+1888777666",
    availability: false,
  },
];

const MentorsTable = () => {
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
          {data.map((mentor) => (
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
              <td className="basis-2/12">{mentor.college}</td>
              <td className="basis-2/12">{mentor.phone}</td>
              <td className="basis-4/12">{`${
                mentor.availability ? "✅" : "❌"
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
